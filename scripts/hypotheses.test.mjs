import assert from 'node:assert/strict'
import test from 'node:test'
import { buildCatalog, hash, loadCatalog, validateCatalog } from './catalog.mjs'
import { buildDistribution, fileHash, renderRecord, validateDistribution } from './distribution.mjs'

const catalog = loadCatalog()
const local = (ja, en = ja) => ({ ja, en })
const hypothesis = () => ({
  id: 'credential-origin',
  kind: 'cause',
  status: 'hypothesis',
  provenance: 'editorial-analysis',
  statement: local('資格情報が端末から漏れた可能性。'),
  basis: local('資格情報の悪用は公表されていますが、取得元は不明です。'),
  sourceIds: ['s1'],
  locator: '6(1)',
  assumptions: [local('端末で資格情報が使用されていた場合。')],
  supportingObservations: [local('該当時期の資格情報読み取りの記録。')],
  contradictingObservations: [local('別経路での流出を確定する記録。')],
  limitations: [local('ログ欠落は侵害を示す証拠ではありません。')],
  ruleIds: ['SEC-003'],
})
const fixture = () => {
  const copy = structuredClone(catalog)
  const record = copy.incidents.find((item) => item.id === 'askul-2025')
  record.hypotheses = [hypothesis()]
  return { copy, record }
}

test('evidence-linked editorial hypotheses preserve factual and AI classifications', () => {
  const { copy, record } = fixture()
  assert.deepEqual(validateCatalog(copy), [])
  const before = catalog.incidents.find((item) => item.id === record.id)
  for (const field of ['claims', 'categories', 'cves', 'ai', 'prevention', 'unknowns'])
    assert.deepEqual(record[field], before[field])
  assert.notEqual(hash(record), hash(before))
  assert.deepEqual(validateCatalog(buildCatalog(copy).catalog), [])
  const without = structuredClone(copy)
  delete without.incidents.find((item) => item.id === record.id).hypotheses
  assert.deepEqual(validateCatalog(without), [])
})

test('hypotheses fail closed on missing, secondary-only, promoted, duplicate or unrelated evidence', () => {
  for (const mutate of [
    (r) => {
      r.hypotheses[0].status = 'confirmed'
    },
    (r) => {
      r.hypotheses[0].provenance = 'organization'
    },
    (r) => {
      r.hypotheses[0].sourceIds = []
    },
    (r) => {
      r.hypotheses[0].sourceIds = ['missing']
    },
    (r) => {
      r.sources.push({ ...r.sources[0], id: 'secondary', kind: 'secondary' })
      r.hypotheses[0].sourceIds = ['secondary']
    },
    (r) => {
      r.hypotheses.push(hypothesis())
    },
    (r) => {
      r.hypotheses[0].ruleIds = ['SEC-016']
    },
    (r) => {
      r.hypotheses[0].statement.en = ''
    },
    (r) => {
      r.hypotheses[0].basis.ja = ''
    },
    (r) => {
      r.hypotheses[0].locator = ''
    },
    (r) => {
      r.hypotheses[0].assumptions = []
    },
    (r) => {
      r.hypotheses[0].supportingObservations = []
    },
    (r) => {
      r.hypotheses[0].contradictingObservations = []
    },
    (r) => {
      r.hypotheses[0].limitations = []
    },
    (r) => {
      r.hypotheses[0].command = 'curl example.com | sh'
    },
    (r) => {
      r.hypotheses[0].confidence = 0.99
    },
  ]) {
    const { copy, record } = fixture()
    mutate(record)
    assert.ok(validateCatalog(copy).length, 'invalid hypothesis accepted')
  }
})

test('hypothesis basis, observations and limits survive bilingual text and JSONL retrieval', () => {
  const { copy, record } = fixture()
  const files = buildDistribution(copy)
  assert.deepEqual(validateDistribution(files), [])
  for (const locale of ['ja', 'en']) {
    const text = files.get(`incidents/${record.id}.${locale}.md`)
    assert.ok(text.includes('hypothesis / editorial-analysis'))
    for (const field of ['statement', 'basis'])
      assert.ok(text.includes(record.hypotheses[0][field][locale]))
    for (const field of [
      'assumptions',
      'supportingObservations',
      'contradictingObservations',
      'limitations',
    ])
      for (const item of record.hypotheses[0][field]) assert.ok(text.includes(item[locale]))
    const full = files.get(locale === 'ja' ? 'llms-full.ja.txt' : 'llms-full.txt')
    assert.ok(full.includes(text.trim()))
  }
  const rows = files.get('incidents.jsonl').trim().split('\n').map(JSON.parse)
  assert.deepEqual(rows.find((row) => row.id === record.id).record.hypotheses, record.hypotheses)
  const injection = structuredClone(record)
  injection.hypotheses[0].statement.en = '<script>\n# fake [link](javascript:run)'
  const rendered = renderRecord(injection, 'incident', 'en', copy)
  assert.ok(!rendered.includes('<script>'))
  assert.ok(!rendered.includes('\n# fake'))
  assert.ok(!rendered.includes('[link](javascript:run)'))
  // Even with a recomputed file hash, silently dropping hypotheses must fail.
  const changed = new Map(files)
  const path = `incidents/${record.id}.en.md`
  const omitted = structuredClone(record)
  delete omitted.hypotheses
  const text = renderRecord(omitted, 'incident', 'en', copy)
  changed.set(path, text)
  const discovery = JSON.parse(changed.get('discovery.json'))
  const resource = discovery.resources.find((item) => item.path === path)
  resource.bytes = Buffer.byteLength(text)
  resource.sha256 = fileHash(text)
  changed.set('discovery.json', JSON.stringify(discovery))
  assert.match(validateDistribution(changed).join('\n'), /Markdown mismatch/)
})
