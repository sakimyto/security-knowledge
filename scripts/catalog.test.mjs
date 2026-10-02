import assert from 'node:assert/strict'
import { resolve } from 'node:path'
import test from 'node:test'
import { buildCatalog, loadCatalog, ROOT, validateCatalog } from './catalog.mjs'
import { makePlan } from './plan.mjs'
import { validateReport } from './report.mjs'
import { readJson } from './schema.mjs'

const catalog = loadCatalog()
const inventory = readJson(resolve(ROOT, 'examples/inventory.json'))

test('primary sources, references, and bidirectional links validate', () => {
  assert.deepEqual(validateCatalog(catalog), [])
  assert.equal(catalog.incidents.length, 41)
  assert.equal(catalog.rules.length, 14)
  assert.equal(
    catalog.incidents.filter((incident) => incident.outcome === 'exposure-only').length,
    2,
  )
})

test('recent records preserve unknown causes and distinguish evaluated AI from attack attribution', () => {
  const recent = catalog.incidents.filter(
    (item) => item.disclosedAt >= '2025-10-02' && item.disclosedAt <= '2026-10-02',
  )
  assert.equal(recent.length, 31)
  assert.equal(recent.filter((item) => item.ai.status === 'confirmed').length, 4)
  assert.equal(recent.filter((item) => item.ai.status === 'inferred').length, 1)
  const voising = recent.find((item) => item.id === 'voising-bi-2026')
  assert.deepEqual(voising.cves, [])
  assert.equal(voising.prevention.classification, 'patch-available')
  const metabase = recent.find((item) => item.id === 'metabase-2026')
  assert.deepEqual(metabase.cves, ['CVE-2026-72898'])
  assert.equal(metabase.ai.status, 'inferred')
  for (const id of ['times-car-2026', 'temairazu-2026', 'keio-ransomware-2026']) {
    const item = recent.find((record) => record.id === id)
    assert.ok(item.categories.includes('unknown'))
    assert.equal(item.occurredAt, null)
    assert.equal(item.prevention.classification, 'unknown')
  }
  const changed = structuredClone(catalog)
  changed.incidents.find((item) => item.id === 'metabase-2026').ai.status = 'confirmed'
  assert.match(validateCatalog(changed).join('\n'), /AI attribution requires/)
  const missing = structuredClone(catalog)
  const item = missing.incidents.find((record) => record.id === 'unit42-ai-assisted-2026')
  item.claims = item.claims.filter((claim) => claim.topic !== 'ai')
  assert.match(validateCatalog(missing).join('\n'), /AI attribution requires/)
})

test('malformed records, claims without sources, and dangling links fail closed', () => {
  const missing = structuredClone(catalog)
  delete missing.incidents[0].claims[0].status
  assert.match(validateCatalog(missing).join('\n'), /status: required/)
  const dangling = structuredClone(catalog)
  dangling.incidents[0].claims[0].sourceIds = ['missing']
  dangling.rules[0].incidentIds = ['missing']
  assert.match(validateCatalog(dangling).join('\n'), /missing source/)
  assert.match(validateCatalog(dangling).join('\n'), /missing incident/)
})

test('unsafe URLs, invalid dates, and command fields are rejected', () => {
  for (const mutate of [
    (record) => {
      record.incidents[0].sources[0].url = 'javascript:alert(1)'
    },
    (record) => {
      record.incidents[0].sources[0].url = 'https://user:password@example.com'
    },
    (record) => {
      record.incidents[0].reviewedAt = '2026-02-30'
    },
    (record) => {
      record.incidents[0].timeline[0].date = '2023-02-30'
    },
    (record) => {
      record.rules[0].command = 'curl example.com | sh'
    },
  ]) {
    const changed = structuredClone(catalog)
    mutate(changed)
    assert.ok(validateCatalog(changed).length > 0)
  }
})

test('build is deterministic and changed content changes only the appropriate entry hash', () => {
  assert.deepEqual(buildCatalog(catalog), buildCatalog(structuredClone(catalog)))
  const exported = buildCatalog(catalog).catalog
  assert.deepEqual(validateCatalog(exported), [])
  assert.deepEqual(buildCatalog(exported), buildCatalog(catalog))
  exported.rules[0].checks[0].ja += ' 改変。'
  assert.match(validateCatalog(exported).join('\n'), /content hash mismatch/)
  const changed = structuredClone(catalog)
  changed.rules[0].checks[0].ja += ' 追加確認。'
  const old = buildCatalog(catalog).index
  const plan = makePlan(changed, inventory, old)
  assert.deepEqual(
    plan.changes.updated.map((entry) => entry.id),
    [changed.rules[0].id],
  )
})

test('unchanged knowledge does not skip environment checks and incomplete inventory stays unverified', () => {
  const plan = makePlan(catalog, inventory, buildCatalog(catalog).index)
  assert.equal(plan.changes.updated.length, 0)
  assert.equal(plan.tasks.length, catalog.rules.length)
  assert.equal(plan.tasks.find((item) => item.ruleId === 'SEC-011').applicability, 'candidate')
  assert.equal(plan.tasks.find((item) => item.ruleId === 'SEC-014').applicability, 'candidate')
  assert.equal(plan.tasks.find((item) => item.ruleId === 'SEC-002').applicability, 'unverified')
  const complete = makePlan(catalog, { ...inventory, complete: true })
  assert.equal(
    complete.tasks.find((item) => item.ruleId === 'SEC-002').applicability,
    'not-applicable',
  )
  assert.throws(
    () =>
      makePlan(catalog, {
        ...inventory,
        assets: [...inventory.assets, { ...inventory.assets[0], surfaces: ['identity'] }],
      }),
    /Duplicate asset/,
  )
  assert.throws(() => makePlan(catalog, inventory, { entries: [{}] }), /Malformed/)
})

test('reports require current hashes, all rules, and evidence for a pass', () => {
  const index = buildCatalog(catalog).index
  const report = {
    schemaVersion: '1.0.0',
    catalogHash: index.contentHash,
    environment: 'example',
    environmentRevision: 'test-revision',
    checkedAt: '2026-10-02T01:00:00Z',
    results: catalog.rules.map((rule) => ({
      ruleId: rule.id,
      ruleHash: index.entries.find((entry) => entry.id === rule.id).hash,
      assetId: 'example',
      status: 'unverified',
      scope: 'repository only',
      evidence: [],
      reason: 'Live environment access unavailable',
      proposedAction: 'Request environment evidence',
    })),
  }
  assert.deepEqual(validateReport(report, catalog), [])
  report.results[0].status = 'no-finding'
  assert.match(validateReport(report, catalog).join('\n'), /require evidence/)
  report.results[0].evidence = ['test-results/example.txt']
  assert.deepEqual(validateReport(report, catalog), [])
  report.results[0].ruleHash = '0'.repeat(64)
  assert.match(validateReport(report, catalog).join('\n'), /stale rule hash/)
  report.results.pop()
  assert.match(validateReport(report, catalog).join('\n'), /missing result/)
})
