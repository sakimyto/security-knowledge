import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildCatalog, loadCatalog, ROOT } from './catalog.mjs'
import { readJson, validateSchema } from './schema.mjs'

export function validateReport(report, catalog) {
  const errors = validateSchema(report, readJson(resolve(ROOT, 'schema/report.schema.json')))
  if (errors.length) return errors
  const { index } = buildCatalog(catalog)
  if (report.catalogHash !== index.contentHash)
    errors.push('Report catalog hash does not match the inspected catalog')
  const seen = new Set()
  for (const result of report.results) {
    const rule = index.entries.find((entry) => entry.kind === 'rule' && entry.id === result.ruleId)
    if (!rule || rule.hash !== result.ruleHash)
      errors.push(`${result.ruleId}: missing rule or stale rule hash`)
    const key = `${result.ruleId}:${result.assetId}`
    if (seen.has(key)) errors.push(`${key}: duplicate result`)
    seen.add(key)
    if (['finding', 'no-finding'].includes(result.status) && result.evidence.length === 0)
      errors.push(`${key}: findings and passes require evidence`)
  }
  for (const rule of catalog.rules) {
    if (!report.results.some((result) => result.ruleId === rule.id))
      errors.push(`${rule.id}: missing result; use unverified for unavailable checks`)
  }
  const checkedAt = new Date(report.checkedAt)
  if (
    Number.isNaN(checkedAt.getTime()) ||
    checkedAt.toISOString().slice(0, 10) !== report.checkedAt.slice(0, 10)
  )
    errors.push('Invalid checkedAt')
  return errors
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  if (!process.argv[2]) {
    console.error('Usage: node scripts/report.mjs report.json')
    process.exitCode = 1
  } else {
    const errors = validateReport(readJson(process.argv[2]), loadCatalog())
    if (errors.length) {
      console.error(errors.join('\n'))
      process.exitCode = 1
    } else
      console.log(
        'Report contract validated. This validates structure and evidence references, not the truth of an inspection.',
      )
  }
}
