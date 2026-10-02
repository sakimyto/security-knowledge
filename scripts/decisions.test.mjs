import assert from 'node:assert/strict'
import test from 'node:test'
import { hash, loadCatalog } from './catalog.mjs'
import {
  buildJevRequest,
  decisionTask,
  reviewJevResponse,
  validateDecisionInput,
  validateJevResponse,
} from './decisions.mjs'

const catalog = loadCatalog()
const input = {
  formatVersion: '1.0.0',
  ruleId: 'SEC-001',
  ruleHash: hash(catalog.rules[0]),
  assetId: 'fictional',
  environmentRevision: 'test-revision',
  observedAt: '2026-10-02T00:00:00Z',
  scope: 'test fixture only',
  observations: [{ id: 'obs-1', text: 'No deployed versions collected', locator: 'test fixture' }],
}
const request = buildJevRequest(catalog, input)
const response = (choice = 'unknown') => ({
  model: 'jev-1.13.0',
  answers: Object.fromEntries(
    Object.entries(request.questions).map(([id, question]) => {
      const selected = id === 'applicability' ? 'applicable' : choice
      return [
        id,
        {
          type: 'choice',
          choice: selected,
          probabilities: Object.fromEntries(
            Object.keys(question.criteria).map((option) => [option, option === selected ? 1 : 0]),
          ),
          confidence: 1,
        },
      ]
    }),
  ),
  usage: { input_tokens: 0, output_tokens: 0 },
})

test('each check is an atomic Choice, with applicability and explicit uncertainty', () => {
  assert.deepEqual(validateDecisionInput(input, catalog), [])
  assert.equal(request.model, 'jev-1.13.0')
  assert.deepEqual(request.state, input)
  for (const rule of catalog.rules) {
    const task = decisionTask(rule)
    assert.equal(Object.keys(task.questions).length, rule.checks.length + 1)
    assert.equal(task.ruleHash, hash(rule))
    for (const question of Object.values(task.questions)) {
      assert.equal(question.type, 'choice')
      assert.ok(Object.hasOwn(question.criteria, 'unknown'))
      assert.ok(question.instructions.ruleId)
    }
  }
  assert.ok(
    decisionTask(catalog.rules[0], 'ja').questions.check_1.instructions.check.includes('照合'),
  )
  assert.throws(() => decisionTask(catalog.rules[0], 'xx'), /locale/)
})

test('missing observations, duplicates, stale hashes, command fields, and invalid dates fail closed', () => {
  for (const mutate of [
    (i) => {
      i.ruleHash = '0'.repeat(64)
    },
    (i) => {
      i.observations.push(i.observations[0])
    },
    (i) => {
      i.command = 'run'
    },
    (i) => {
      i.observedAt = '2026-02-30T00:00:00Z'
    },
  ]) {
    const copy = structuredClone(input)
    mutate(copy)
    assert.ok(validateDecisionInput(copy, catalog).length)
    assert.throws(() => buildJevRequest(catalog, copy))
  }
  assert.throws(() => buildJevRequest(catalog, { ...input, observations: [] }), /No observations/)
})

test('probability, confidence, pinned model, and question identities are validated independently of inference', () => {
  assert.deepEqual(validateJevResponse(response(), request), [])
  for (const mutate of [
    (r) => {
      delete r.answers.check_1
    },
    (r) => {
      r.answers.extra = r.answers.check_1
    },
    (r) => {
      r.model = 'jev-other'
    },
    (r) => {
      r.answers.check_1.confidence = NaN
    },
    (r) => {
      r.answers.check_1.probabilities.unknown = 2
    },
    (r) => {
      r.answers.check_1.probabilities.unknown = 0.5
    },
    (r) => {
      r.answers.check_1.choice = 'concern-indicated'
    },
    (r) => {
      r.answers.check_1.probabilities.extra = 0
    },
    (r) => {
      r.answers.check_1.confidence = 0.5
    },
    (r) => {
      r.answers.check_1.command = 'run'
    },
  ]) {
    const r = response()
    mutate(r)
    assert.ok(validateJevResponse(r, request).length)
    assert.throws(() => reviewJevResponse(catalog, input, r, 0.9))
  }
})

test('confidence only routes review: unknown and satisfied answers cannot certify no-finding', () => {
  for (const choice of ['unknown', 'satisfied-indicated', 'concern-indicated']) {
    const receipt = reviewJevResponse(catalog, input, response(choice), 0.9)
    assert.equal(receipt.status, 'unverified')
    assert.equal(receipt.inputHash, hash(input))
    assert.deepEqual(receipt.observationIds, ['obs-1'])
    assert.equal(
      receipt.decisions[1].route,
      choice === 'unknown'
        ? 'needs-more-evidence'
        : choice === 'concern-indicated'
          ? 'priority-review'
          : 'review',
    )
  }
  const uncertain = response('concern-indicated')
  uncertain.answers.check_1.probabilities = {
    'concern-indicated': 0.6,
    'satisfied-indicated': 0.2,
    unknown: 0.2,
  }
  uncertain.answers.check_1.confidence = 0.4
  assert.equal(
    reviewJevResponse(catalog, input, uncertain, 0.9).decisions[1].route,
    'needs-more-evidence',
  )
  for (const threshold of [-1, 2, NaN, '0.9'])
    assert.throws(() => reviewJevResponse(catalog, input, response(), threshold))
})
