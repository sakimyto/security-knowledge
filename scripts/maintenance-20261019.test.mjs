import assert from 'node:assert/strict'
import test from 'node:test'
import { loadCatalog } from './catalog.mjs'
const catalog = loadCatalog()
const record = (id) => {
  const item = catalog.incidents.find((value) => value.id === id)
  assert.ok(item, `missing reviewed record: ${id}`)
  return item
}

test('October 19 evidence preserves distinct scopes and the corrected card disclosure', () => {
  const server = record('skyticket-server-2026')
  const admin = record('skyticket-business-system-2026')
  const bus = record('skyticket-bus-2026')
  assert.equal(server.occurredAt, '2026-10-02')
  assert.equal(admin.occurredAt, '2026-09-20')
  assert.equal(bus.occurredAt, '2026-08-03')
  assert.match(server.claims.find((c) => c.topic === 'corrected-impact').text.en, /6,140 people/)
  assert.match(server.claims.find((c) => c.topic === 'retained-data').text.en, /logs.*encryption/i)
  assert.match(admin.summary.en, /17,780 records/)
  assert.match(bus.summary.en, /12,000 reservations/)
  assert.deepEqual(admin.cves, [])
  assert.equal(admin.prevention.classification, 'unknown')
  assert.ok(bus.categories.includes('implementation'))
  assert.ok(server.sources.some((s) => s.publishedAt === '2026-10-16'))
})

test('undisclosed causes and uncertain exposure are not promoted to confirmed leakage', () => {
  for (const id of [
    'yamato-pay-later-2026',
    'medley-atlink-2026',
  ]) {
    const item = record(id)
    assert.ok(item.categories.includes('unknown'))
    assert.equal(item.ai.status, 'unknown')
    assert.equal(item.prevention.classification, 'unknown')
  }
  assert.equal(record('omu-ransomware-2026').occurredAt, null)
  assert.match(record('omu-ransomware-2026').unknowns.map((x) => x.en).join(' '), /130,000.*records/)
  assert.match(record('medley-atlink-2026').summary.en, /787 medical institutions/)
  assert.ok(!catalog.incidents.some((item) => /jelly-beans/.test(item.id)))
})

test('retention changes remain planned and vendor/customer records are not duplicated', () => {
  const times = record('times-car-2026')
  assert.match(times.summary.en, /6\.6 million accounts/)
  assert.match(
    times.reportedActions.find((c) => c.topic === 'planned-retention-change').text.en,
    /October 2026/,
  )
  assert.match(
    record('scala-iask-2026').claims.find((c) => c.topic === 'orix-impact').text.en,
    /26,500 inquiries/,
  )
  assert.match(
    record('scala-iask-2026').claims.find((c) => c.topic === 'tobu-scope').text.en,
    /no evidence/,
  )
  assert.ok(!catalog.incidents.some((item) => /^(tobu|orix-iask)/.test(item.id)))
  assert.notEqual(record('nikkei-m365-2026').id, record('nikkei-workspace-2026').id)
})
