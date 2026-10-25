import assert from 'node:assert/strict'
import test from 'node:test'
import { loadCatalog, validateCatalog } from './catalog.mjs'

const catalog = loadCatalog()
const get = (id) => {
  const item = catalog.incidents.find((x) => x.id === id)
  assert.ok(item, id)
  return item
}

test('October 26: bank populations and the refrigeration campaign retain uncertain attribution', () => {
  for (const id of ['kb-kookmin-2026', 'hana-bank-2026', 'france-refrigeration-2026']) {
    const item = get(id)
    assert.equal(item.ai.status, 'unknown')
    assert.deepEqual(item.cves, [])
  }
  assert.match(get('kb-kookmin-2026').summary.en, /99 customers.*20/)
  assert.match(get('hana-bank-2026').summary.en, /89/)
  assert.match(
    get('france-refrigeration-2026')
      .claims.map((x) => x.text.en)
      .join(' '),
    /Copeland.*Dixell/,
  )
})

test('October 26: follow-ups preserve recovery, storage boundaries and email units', () => {
  const idcf = get('idcf-ransomware-2026')
  assert.match(idcf.summary.en, /194/)
  assert.match(idcf.claims.map((x) => x.text.en).join(' '), /48 companies/)
  const omu = get('omu-ransomware-2026')
  assert.match(omu.summary.en, /subcontractor/)
  assert.match(omu.unknowns.map((x) => x.en).join(' '), /130,000.*records/)
  const raiden = get('arcadia-raiden-2026')
  assert.match(raiden.summary.en, /traversal/)
  assert.match(raiden.claims.map((x) => x.text.en).join(' '), /1,423,428 messages/)
  assert.equal(raiden.ai.status, 'unknown')
  assert.ok(raiden.ruleIds.includes('SEC-005'))
})

test('October 26: validation rejects mutated source links, dates, reciprocal links and unsupported AI certainty', () => {
  assert.deepEqual(validateCatalog(catalog), [])
  for (const mutate of [
    (c) => {
      c.incidents.find((x) => x.id === 'kb-kookmin-2026').claims[0].sourceIds = ['absent']
    },
    (c) => {
      c.incidents.find((x) => x.id === 'hana-bank-2026').disclosedAt = '2026-02-30'
    },
    (c) => {
      c.rules.find((x) => x.id === 'SEC-005').incidentIds = c.rules
        .find((x) => x.id === 'SEC-005')
        .incidentIds.filter((x) => x !== 'arcadia-raiden-2026')
    },
    (c) => {
      c.incidents.find((x) => x.id === 'hana-bank-2026').ai.status = 'confirmed'
    },
  ]) {
    const changed = structuredClone(catalog)
    mutate(changed)
    assert.ok(validateCatalog(changed).length > 0)
  }
})
