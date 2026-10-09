import assert from 'node:assert/strict'
import { existsSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'
import test from 'node:test'
import { buildCatalog, loadCatalog, ROOT } from './catalog.mjs'
import {
  buildDistribution,
  fileHash,
  renderRecord,
  validateDistribution,
  writeDistribution,
} from './distribution.mjs'
import { validateSchema } from './schema.mjs'

const catalog = loadCatalog()
const built = buildCatalog(catalog)
const files = buildDistribution(catalog)
const manifest = () => JSON.parse(files.get('discovery.json'))
const withManifest = (mutate) => {
  const copy = new Map(files)
  const discovery = manifest()
  mutate(discovery, copy)
  copy.set('discovery.json', `${JSON.stringify(discovery, null, 2)}\n`)
  return copy
}

test('distribution preserves all original records and hashes across JSON, JSONL, and bilingual text', () => {
  assert.deepEqual(validateDistribution(files), [])
  assert.deepEqual(files, buildDistribution(structuredClone(catalog)))
  for (const kind of ['rule', 'incident']) {
    const rows = files
      .get(`${kind}s.jsonl`)
      .trimEnd()
      .split('\n')
      .map((line) => JSON.parse(line))
    assert.deepEqual(
      rows.map((row) => row.record),
      catalog[`${kind}s`],
    )
    for (const { id, hash, record } of rows) {
      assert.equal(hash, built.index.entries.find((entry) => entry.id === id).hash)
      assert.deepEqual(JSON.parse(files.get(`${kind}s/${id}.json`)), record)
      for (const locale of ['ja', 'en']) {
        const text = files.get(`${kind}s/${id}.${locale}.md`)
        assert.ok(text.includes(hash))
        if (kind === 'incident') {
          for (const claim of record.claims) assert.ok(text.includes(`[${claim.status} /`))
          for (const source of record.sources) assert.ok(text.includes(source.url))
          assert.ok(text.includes(record.outcome))
        } else {
          assert.ok(text.includes(record.execution))
          assert.ok(text.includes(record.provenance))
          assert.ok(text.includes(locale === 'ja' ? '確認できない範囲' : 'Limitations'))
        }
      }
    }
  }
  assert.equal(manifest().surfaces.length, 11)
  const report = JSON.parse(files.get('report.example.json'))
  assert.equal(report.results.length, 16)
  assert.ok(
    report.results.every((result) => result.status === 'unverified' && !result.evidence.length),
  )
})

test('rehashed intake JSONL cannot change candidate facts independently of the reviewed ledger', () => {
  const invalid = withManifest((d, copy) => {
    const resource = d.resources.find((item) => item.kind === 'intake' && item.format === 'jsonl')
    const rows = copy
      .get(resource.path)
      .trimEnd()
      .split('\n')
      .map((line) => JSON.parse(line))
    rows[0].supplied.count.value = 1
    const text = `${rows.map((row) => JSON.stringify(row)).join('\n')}\n`
    copy.set(resource.path, text)
    resource.bytes = Buffer.byteLength(text)
    resource.sha256 = fileHash(text)
  })
  assert.match(validateDistribution(invalid).join('\n'), /Intake JSONL mismatch/)
})

test('Markdown data cannot create injected headings, HTML, or links', () => {
  const rule = structuredClone(catalog.rules[0])
  rule.summary.en = '<script>\n# injected [link](javascript:run)'
  const text = renderRecord(rule, 'rule', 'en', catalog)
  assert.ok(!text.includes('<script>'))
  assert.ok(!text.includes('\n# injected'))
  assert.ok(!text.includes('[link](javascript:run)'))
})

test('path traversal, duplicate paths, record omissions, changed bytes and wrong metadata fail', () => {
  const changed = new Map(files)
  changed.set('rules/SEC-001.en.md', 'tampered')
  assert.match(validateDistribution(changed).join('\n'), /changed file|Markdown mismatch/)
  for (const mutate of [
    (d) => {
      d.resources[0].path = '../outside.json'
    },
    (d) => {
      d.resources.push(d.resources[0])
    },
    (d) => {
      d.resources[0].bytes += 1
    },
    (d) => {
      d.records.pop()
    },
    (d) => {
      d.updatedAt = '2026-10-01'
    },
    (d) => {
      d.records[0].hash = '0'.repeat(64)
    },
    (d) => {
      d.surfaces[0].ruleIds.pop()
    },
  ])
    assert.ok(validateDistribution(withManifest(mutate)).length > 0)
  const extra = new Map(files)
  extra.set('hidden.json', '{}')
  assert.match(validateDistribution(extra).join('\n'), /Unlisted/)
})

test('validly rehashed corrupt JSONL is rejected by record comparison', () => {
  const invalid = withManifest((d, copy) => {
    const text = `\n${copy.get('rules.jsonl')}`
    copy.set('rules.jsonl', text)
    const resource = d.resources.find((item) => item.path === 'rules.jsonl')
    resource.bytes = Buffer.byteLength(text)
    resource.sha256 = fileHash(text)
  })
  assert.ok(validateDistribution(invalid).length > 0)
})

test('numeric schemas accept integer boundaries and reject unsupported or malformed values', () => {
  const integer = { type: 'integer', minimum: 1, maximum: 2 }
  for (const value of [1, 2]) assert.deepEqual(validateSchema(value, integer), [])
  for (const value of [0, 3, 1.5, '1', NaN, Infinity])
    assert.ok(validateSchema(value, integer).length)
  assert.deepEqual(validateSchema([1, 2], { type: 'array', maxItems: 2 }), [])
  assert.ok(validateSchema([1, 2, 3], { type: 'array', maxItems: 2 }).length)
  assert.ok(validateSchema({}, { unknownKeyword: true }).length)
  assert.ok(
    validateSchema(Object.create({ id: 'inherited' }), { type: 'object', required: ['id'] }).length,
  )
})

test('writer protects sources and symlinks and only prunes unchanged files from its prior manifest', () => {
  assert.throws(() => writeDistribution(ROOT, files), /source/)
  assert.throws(() => writeDistribution(resolve(ROOT, '..'), files), /source/)
  assert.throws(() => writeDistribution(resolve('/'), files), /source/)
  assert.throws(() => writeDistribution(resolve(ROOT, 'rules'), files), /source/)
  const output = mkdtempSync(resolve(tmpdir(), 'security-dist-test-'))
  try {
    writeDistribution(output, files)
    writeFileSync(resolve(output, 'owner-notes.txt'), 'keep')
    const previous = manifest()
    const stale = 'removed.generated.txt'
    writeFileSync(resolve(output, stale), 'old generated file')
    previous.resources.push({
      path: stale,
      kind: 'entry',
      format: 'text',
      bytes: 18,
      sha256: fileHash('old generated file'),
    })
    writeFileSync(resolve(output, 'discovery.json'), JSON.stringify(previous))
    writeDistribution(output, files)
    assert.equal(existsSync(resolve(output, stale)), false)
    assert.equal(readFileSync(resolve(output, 'owner-notes.txt'), 'utf8'), 'keep')
    writeFileSync(resolve(output, stale), 'user modified')
    writeFileSync(resolve(output, 'discovery.json'), JSON.stringify(previous))
    assert.throws(() => writeDistribution(output, files), /Modified stale file/)
    assert.equal(readFileSync(resolve(output, stale), 'utf8'), 'user modified')
    writeFileSync(resolve(output, 'discovery.json'), files.get('discovery.json'))
    rmSync(resolve(output, 'rules'), { recursive: true })
    symlinkSync(resolve(output, '..'), resolve(output, 'rules'), 'dir')
    assert.throws(() => writeDistribution(output, files), /Symlink/)
  } finally {
    rmSync(output, { recursive: true, force: true })
  }
})
