import { createHash } from 'node:crypto'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readJson, validateSchema } from './schema.mjs'

export const ROOT = fileURLToPath(new URL('..', import.meta.url))
export const hash = (value) => createHash('sha256').update(JSON.stringify(value)).digest('hex')

export function loadCatalog(root = ROOT) {
  const readRecords = (directory) =>
    readdirSync(resolve(root, directory))
      .filter((file) => file.endsWith('.json'))
      .sort()
      .map((file) => {
        const record = readJson(resolve(root, directory, file))
        if (file !== `${record.id}.json`)
          throw new Error(`Record ID does not match filename: ${directory}/${file}`)
        return record
      })
  return {
    ...readJson(resolve(root, 'manifest.json')),
    incidents: readRecords('incidents'),
    rules: readRecords('rules'),
  }
}

export function validateCatalog(catalog, root = ROOT) {
  const errors = validateSchema(catalog, readJson(resolve(root, 'schema/catalog.schema.json')))
  if (errors.length) return errors
  const { contentHash, ...content } = catalog
  if (contentHash && contentHash !== hash(content)) errors.push('Catalog content hash mismatch')
  const incidentIds = new Set(catalog.incidents.map((item) => item.id))
  const ruleIds = new Set(catalog.rules.map((item) => item.id))
  if (incidentIds.size !== catalog.incidents.length || ruleIds.size !== catalog.rules.length)
    errors.push('Duplicate record ID')
  for (const incident of catalog.incidents) {
    const sourceIds = new Set(incident.sources.map((source) => source.id))
    if (sourceIds.size !== incident.sources.length)
      errors.push(`${incident.id}: duplicate source ID`)
    if (!incident.sources.some((source) => source.kind !== 'secondary'))
      errors.push(`${incident.id}: primary source required`)
    const claims = [
      ...incident.claims,
      ...incident.timeline,
      ...incident.reportedActions,
      incident.prevention,
    ]
    for (const claim of claims) {
      for (const id of claim.sourceIds)
        if (!sourceIds.has(id)) errors.push(`${incident.id}: missing source ${id}`)
      if (claim.sourceIds.length === 0) errors.push(`${incident.id}: each claim needs a source`)
    }
    for (const id of incident.ruleIds) {
      if (!ruleIds.has(id)) errors.push(`${incident.id}: missing rule ${id}`)
      else if (!catalog.rules.find((rule) => rule.id === id).incidentIds.includes(incident.id))
        errors.push(`${incident.id}: rule backlink missing ${id}`)
    }
  }
  const urls = [
    ...catalog.incidents.flatMap((incident) => incident.sources),
    ...catalog.rules.flatMap((rule) => rule.references),
  ]
  for (const source of urls) {
    try {
      const url = new URL(source.url)
      if (url.protocol !== 'https:' || url.username || url.password)
        errors.push(`Unsafe source URL: ${source.url}`)
    } catch {
      errors.push(`Invalid source URL: ${source.url}`)
    }
  }
  for (const rule of catalog.rules) {
    for (const id of rule.incidentIds) {
      if (!incidentIds.has(id)) errors.push(`${rule.id}: missing incident ${id}`)
      else if (!catalog.incidents.find((incident) => incident.id === id).ruleIds.includes(rule.id))
        errors.push(`${rule.id}: incident backlink missing ${id}`)
    }
  }
  const visit = (value, path = '$') => {
    if (typeof value === 'string' && /(?:At|Date|^date)$/.test(path.split('.').at(-1))) {
      const date = new Date(`${value}T00:00:00Z`)
      if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value)
        errors.push(`${path}: invalid date`)
      if (value > catalog.updatedAt) errors.push(`${path}: date later than catalog update`)
    }
    if (value && typeof value === 'object')
      for (const [key, item] of Object.entries(value)) visit(item, `${path}.${key}`)
  }
  visit(catalog)
  return errors
}

export function buildCatalog(catalog) {
  const { contentHash: _contentHash, ...content } = catalog
  const { incidents, rules, ...metadata } = content
  const entries = [
    ...incidents.map((record) => ({ kind: 'incident', id: record.id, hash: hash(record) })),
    ...rules.map((record) => ({ kind: 'rule', id: record.id, hash: hash(record) })),
  ]
  return {
    catalog: { ...content, contentHash: hash(content) },
    index: { ...metadata, contentHash: hash(content), entries },
  }
}
