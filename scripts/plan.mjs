import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildCatalog, loadCatalog, ROOT, validateCatalog } from './catalog.mjs'
import { readJson, validateSchema } from './schema.mjs'

export function makePlan(catalog, inventory, previousIndex) {
  const errors = [
    ...validateCatalog(catalog),
    ...validateSchema(inventory, readJson(resolve(ROOT, 'schema/inventory.schema.json'))),
  ]
  if (errors.length) throw new Error(errors.join('\n'))
  if (new Set(inventory.assets.map((asset) => asset.id)).size !== inventory.assets.length)
    throw new Error('Duplicate asset ID')
  const { index } = buildCatalog(catalog)
  if (
    previousIndex &&
    (!Array.isArray(previousIndex.entries) ||
      !previousIndex.entries.every(
        (entry) =>
          entry &&
          ['rule', 'incident'].includes(entry.kind) &&
          typeof entry.id === 'string' &&
          /^[a-f0-9]{64}$/.test(entry.hash),
      ))
  )
    throw new Error('Malformed previous index')
  const previous = new Map(
    (previousIndex?.entries ?? []).map((entry) => [`${entry.kind}:${entry.id}`, entry.hash]),
  )
  const current = new Set(index.entries.map((entry) => `${entry.kind}:${entry.id}`))
  return {
    schemaVersion: '1.0.0',
    catalogHash: index.contentHash,
    environment: inventory.environment,
    environmentRevision: inventory.revision,
    changes: {
      updated: index.entries.filter(
        (entry) => previous.get(`${entry.kind}:${entry.id}`) !== entry.hash,
      ),
      removed: (previousIndex?.entries ?? []).filter(
        (entry) => !current.has(`${entry.kind}:${entry.id}`),
      ),
    },
    // Weekly runs still inspect the environment even if the knowledge is unchanged.
    tasks: catalog.rules.map((rule) => {
      const assets = inventory.assets.filter((asset) =>
        rule.surfaces.some((surface) => asset.surfaces.includes(surface)),
      )
      return {
        ruleId: rule.id,
        ruleHash: index.entries.find((entry) => entry.kind === 'rule' && entry.id === rule.id).hash,
        applicability: assets.length
          ? 'candidate'
          : inventory.complete
            ? 'not-applicable'
            : 'unverified',
        assetIds: assets.map((asset) => asset.id),
        condition: rule.applicability,
        targets: rule.targets,
        checks: rule.checks,
        completionEvidence: rule.completionEvidence,
        limitations: rule.limitations,
      }
    }),
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  try {
    const arg = (name) => {
      const index = process.argv.indexOf(name)
      if (index === -1) return undefined
      if (!process.argv[index + 1] || process.argv[index + 1].startsWith('--'))
        throw new Error(`${name} requires a file`)
      return process.argv[index + 1]
    }
    const inventoryPath = arg('--inventory')
    if (!inventoryPath)
      throw new Error(
        'Usage: node scripts/plan.mjs --inventory inventory.json [--previous previous-index.json]',
      )
    const previousPath = arg('--previous')
    console.log(
      JSON.stringify(
        makePlan(
          loadCatalog(),
          readJson(inventoryPath),
          previousPath ? readJson(previousPath) : undefined,
        ),
        null,
        2,
      ),
    )
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}
