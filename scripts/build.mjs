import { resolve } from 'node:path'
import { loadCatalog, ROOT, validateCatalog } from './catalog.mjs'
import { buildDistribution, writeDistribution } from './distribution.mjs'

const catalog = loadCatalog()
const errors = validateCatalog(catalog)
if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
if (!process.argv.includes('--check')) {
  const outputIndex = process.argv.indexOf('--out')
  const output = outputIndex === -1 ? resolve(ROOT, 'dist') : process.argv[outputIndex + 1]
  if (!output) throw new Error('--out requires a directory')
  writeDistribution(output, buildDistribution(catalog))
}
console.log(`Validated ${catalog.incidents.length} incidents / ${catalog.rules.length} rules`)
