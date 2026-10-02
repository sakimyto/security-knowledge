import { readFileSync } from 'node:fs'

// A deliberately limited JSON Schema validator for this repository's schemas.
// Unknown keywords fail closed instead of silently weakening the contract.
const keywords = new Set([
  '$schema',
  '$id',
  'title',
  'description',
  '$defs',
  '$ref',
  'type',
  'properties',
  'required',
  'additionalProperties',
  'items',
  'minItems',
  'uniqueItems',
  'minLength',
  'pattern',
  'enum',
  'const',
])

export function validateSchema(value, schema, path = '$', root = schema) {
  const errors = []
  for (const keyword of Object.keys(schema)) {
    if (!keywords.has(keyword)) errors.push(`${path}: unsupported schema keyword ${keyword}`)
  }
  if (schema.$ref) {
    if (!schema.$ref.startsWith('#/$defs/')) return [`${path}: only local $defs refs are supported`]
    const definition = root.$defs?.[schema.$ref.slice(8)]
    return definition
      ? [...errors, ...validateSchema(value, definition, path, root)]
      : [`${path}: unresolved reference`]
  }
  const type = value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value
  if (schema.type && !(Array.isArray(schema.type) ? schema.type : [schema.type]).includes(type)) {
    return [...errors, `${path}: expected ${schema.type}, received ${type}`]
  }
  if (schema.enum && !schema.enum.includes(value))
    errors.push(`${path}: unsupported value ${String(value)}`)
  if ('const' in schema && value !== schema.const) errors.push(`${path}: expected ${schema.const}`)
  if (type === 'string') {
    if (value.length < (schema.minLength ?? 0)) errors.push(`${path}: empty or short string`)
    if (schema.pattern && !new RegExp(schema.pattern).test(value))
      errors.push(`${path}: pattern mismatch`)
  }
  if (type === 'object') {
    for (const key of schema.required ?? [])
      if (!(key in value)) errors.push(`${path}.${key}: required`)
    for (const [key, item] of Object.entries(value)) {
      if (schema.properties?.[key])
        errors.push(...validateSchema(item, schema.properties[key], `${path}.${key}`, root))
      else if (schema.additionalProperties === false)
        errors.push(`${path}.${key}: unexpected field`)
      else if (typeof schema.additionalProperties === 'object')
        errors.push(...validateSchema(item, schema.additionalProperties, `${path}.${key}`, root))
    }
  }
  if (type === 'array') {
    if (value.length < (schema.minItems ?? 0)) errors.push(`${path}: too few items`)
    if (
      schema.uniqueItems &&
      new Set(value.map((item) => JSON.stringify(item))).size !== value.length
    )
      errors.push(`${path}: duplicate items`)
    if (schema.items)
      value.forEach((item, i) => {
        errors.push(...validateSchema(item, schema.items, `${path}[${i}]`, root))
      })
  }
  return errors
}

export function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}
