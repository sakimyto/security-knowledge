import { existsSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { ROOT } from './catalog.mjs'
import { readJson, validateSchema } from './schema.mjs'

export function loadIntakes(root = ROOT) {
  const directory = resolve(root, 'intake')
  if (!existsSync(directory)) return []
  return readdirSync(directory)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => {
      const data = readJson(resolve(directory, file))
      if (file !== `${data.id}.json`) throw new Error(`Intake ID does not match filename: ${file}`)
      return data
    })
}

export function validateIntake(data, catalog, root = ROOT) {
  const errors = validateSchema(data, readJson(resolve(root, 'schema/intake.schema.json')))
  if (errors.length) return errors
  if (data.yearProvenance !== `user-confirmed-${data.year}`)
    errors.push('Intake year provenance mismatch')
  const ids = new Set()
  for (const row of data.records) {
    if (ids.has(row.id)) errors.push(`${row.id}: duplicate candidate`)
    ids.add(row.id)
    const catalogued = row.status.startsWith('catalogued')
    if (catalogued !== row.catalogIncidentIds.length > 0)
      errors.push(`${row.id}: catalog membership disagrees with review status`)
    if ((catalogued || row.status !== 'awaiting-primary-source') && !row.verified.sourceUrls.length)
      errors.push(`${row.id}: reviewed primary sources required`)
    if (
      row.status !== 'catalogued' &&
      row.status !== 'excluded-non-cyber' &&
      (!row.retry || !row.gaps.length)
    )
      errors.push(`${row.id}: unresolved candidates require gaps and follow-up`)
    const records = row.catalogIncidentIds.map((id) =>
      catalog.incidents.find((item) => item.id === id),
    )
    if (records.some((record) => !record)) errors.push(`${row.id}: missing catalog incident`)
    const allowed = new Set(
      records.filter(Boolean).flatMap((record) => record.sources.map((source) => source.url)),
    )
    for (const claim of row.verified.claims) {
      for (const url of claim.sourceUrls) {
        if (!row.verified.sourceUrls.includes(url) || (catalogued && !allowed.has(url)))
          errors.push(`${row.id}: unsupported claim source ${url}`)
      }
    }
  }
  const visit = (value, key = '') => {
    if (typeof value === 'string' && value.startsWith('https:')) {
      try {
        const url = new URL(value)
        if (url.protocol !== 'https:' || url.username || url.password)
          errors.push('Unsafe intake URL')
      } catch {
        errors.push('Invalid intake URL')
      }
    }
    if (typeof value === 'string' && /(?:At|^date)$/.test(key)) {
      const date = new Date(`${value}T00:00:00Z`)
      if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value)
        errors.push(`Invalid intake date: ${value}`)
      if (value > data.reviewedAt || value > catalog.updatedAt)
        errors.push('Intake date later than review')
    }
    if (value && typeof value === 'object')
      for (const [nextKey, item] of Object.entries(value)) visit(item, nextKey)
  }
  visit(data)
  return errors
}
