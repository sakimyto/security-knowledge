import assert from 'node:assert/strict'
import test from 'node:test'
import { buildCatalog, loadCatalog, validateCatalog } from './catalog.mjs'

const catalog = loadCatalog()
function weeklyErrors(c) {
  const errors = [...validateCatalog(c)]
  if (c.incidents.some(x => x.id === 'atlink-medley-2026')) errors.push('ONE-INCIDENT: duplicate At-link record')
  const medley = c.incidents.find(x => x.id === 'medley-atlink-2026')
  if (!medley || medley.occurredAt !== null || medley.disclosedAt !== '2026-10-14') errors.push('SOURCE-BOUNDARY: At-link dates')
  for (const r of c.rules) if (r.incidentIds.includes('atlink-medley-2026')) errors.push('ONE-INCIDENT: stale backlink')
  return errors
}

test('November 9: consolidated At-link retains primary evidence, scope and uncertain entry', () => {
  assert.deepEqual(weeklyErrors(catalog), [])
  const item = catalog.incidents.find(x => x.id === 'medley-atlink-2026')
  assert.match(item.summary.en, /787 medical institutions/)
  assert.match(item.reportedActions.map(x => x.text.en).join(' '), /test.*October 28/)
  assert.equal(item.ai.status, 'unknown')
  assert.deepEqual(item.cves, [])
  assert.ok(item.sources.every(s => s.kind !== 'secondary'))
  assert.ok(item.ruleIds.includes('SEC-003'))
})

test('November 9: IDCF distinguishes recovery customers, portal records and unknown CVE', () => {
  const item = catalog.incidents.find(x => x.id === 'idcf-ransomware-2026')
  assert.match(item.summary.en, /206/)
  assert.match(item.claims.map(x => x.text.en).join(' '), /71 companies/)
  assert.match(item.claims.map(x => x.text.en).join(' '), /31 companies.*31 records/)
  assert.ok(item.claims.some(x => x.topic === 'entry' && x.sourceIds.includes('s7')))
  assert.equal(item.ai.status, 'unknown')
  assert.deepEqual(item.cves, [])
  for (const id of ['SEC-001','SEC-002','SEC-003','SEC-006','SEC-009','SEC-013']) {
    assert.equal(catalog.rules.find(x => x.id === id).updatedAt, '2026-11-09')
  }
})

test('November 9: detectors reject semantic duplicate, broken links, date, AI and hash variants', () => {
  const medley = catalog.incidents.find(x => x.id === 'medley-atlink-2026')
  const duplicate = structuredClone(catalog)
  const extra = structuredClone(medley); extra.id = 'atlink-medley-2026'
  duplicate.incidents.push(extra)
  for (const rule of duplicate.rules) if (extra.ruleIds.includes(rule.id)) rule.incidentIds.push(extra.id)
  assert.deepEqual(validateCatalog(duplicate), [])
  assert.ok(weeklyErrors(duplicate).includes('ONE-INCIDENT: duplicate At-link record'))
  for (const [mutate, expected] of [
    [c => {c.incidents.find(x => x.id === medley.id).claims[0].sourceIds = ['absent']}, /missing source/],
    [c => {c.incidents.find(x => x.id === medley.id).disclosedAt = '2026-02-30'}, /invalid date/],
    [c => {c.rules.find(x => x.id === 'SEC-003').incidentIds = c.rules.find(x => x.id === 'SEC-003').incidentIds.filter(x => x !== medley.id)}, /backlink/],
    [c => {c.incidents.find(x => x.id === medley.id).ai.status = 'confirmed'}, /AI attribution/],
    [c => {c.contentHash = '0'.repeat(64)}, /content hash/],
  ]) {
    const broken = structuredClone(catalog); mutate(broken)
    assert.match(weeklyErrors(broken).join('\n'), expected)
  }
  assert.deepEqual(weeklyErrors(buildCatalog(catalog).catalog), [])
})
