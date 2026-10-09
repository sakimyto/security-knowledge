import assert from 'node:assert/strict'
import test from 'node:test'
import { loadCatalog } from './catalog.mjs'
import { loadIntakes, validateIntake } from './intake.mjs'

const catalog = loadCatalog()
const intake = () => structuredClone(loadIntakes()[0])

test('every domestic candidate retains unverified input separately from sourced facts', () => {
  const data = intake()
  assert.deepEqual(validateIntake(data, catalog), [])
  assert.equal(data.records.length, 169)
  assert.equal(data.originalSourceUrl, null)
  assert.ok(data.records.every((row) => row.supplied.provenance === 'user-supplied-unverified'))
  const kddi = data.records.find((row) => row.id === 'U2026-147')
  assert.equal(kddi.supplied.count.value, 14220000)
  assert.ok(kddi.verified.claims.some((claim) => claim.text.en.includes('12,231,954')))
  const unresolved = data.records.find((row) => row.id === 'U2026-127')
  assert.equal(unresolved.status, 'awaiting-primary-source')
  assert.deepEqual(unresolved.catalogIncidentIds, [])
  assert.equal(unresolved.retry, true)
  const paper = data.records.find((row) => row.id === 'U2026-058')
  assert.equal(paper.status, 'excluded-non-cyber')
  assert.deepEqual(paper.catalogIncidentIds, [])
  const partial = data.records.find((row) => row.id === 'U2026-054')
  assert.equal(partial.status, 'catalogued-partial')
  assert.ok(partial.gaps.length)
})

test('duplicate rows, false catalog membership, dangling evidence and unsafe URLs fail closed', () => {
  for (const mutate of [
    (data) => data.records.push(data.records[0]),
    (data) => {
      data.records[0].catalogIncidentIds = ['does-not-exist']
    },
    (data) => {
      data.records.find((row) => row.status === 'awaiting-primary-source').catalogIncidentIds = [
        'scala-iask-2026',
      ]
    },
    (data) => {
      data.records[0].verified.sourceUrls = []
    },
    (data) => {
      data.records[0].verified.claims[0].sourceUrls = ['https://example.com/unsupported']
    },
    (data) => {
      data.records[0].verified.sourceUrls[0] = 'https://user:password@example.com'
    },
    (data) => {
      data.records[0].supplied.date = '2026-02-30'
    },
    (data) => {
      data.records[0].reviewedAt = '2026-10-10'
    },
  ]) {
    const data = intake()
    mutate(data)
    assert.ok(validateIntake(data, catalog).length, mutate.toString())
  }
})
