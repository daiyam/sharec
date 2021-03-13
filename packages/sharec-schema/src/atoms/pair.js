// @ts-check

const isEqual = require('lodash/isEqual')
const primitiveAtom = require('./primitive')
const hashAtom = require('./hash')

/**
 * @typedef {import('types/Schema').Pair<any>} AnyPair
 * @typedef {import('types/Schema').SchemaParams<AnyPair>} SchemaAnyPairParams
 * @typedef {import('types/Schema').Primitive} Primitive
 * @typedef {import('types/Schema').SchemaPrimitiveParams} SchemaPrimitiveParams
 */

/**
 * Merges pairs-like data structures
 * Also can handle string values and other primitives
 * @param {SchemaAnyPairParams|SchemaPrimitiveParams} params
 * @returns {AnyPair|Primitive}
 */
function pairAtom(params) {
  const { current, upcoming, cached } = params

  if (current === undefined && upcoming) return upcoming
  if (current && upcoming === undefined) return current
  if (cached !== undefined && !isEqual(current, cached)) return current
  if (typeof current !== typeof upcoming) return upcoming
  // @ts-ignore
  if (typeof current === 'string') return primitiveAtom(params)

  if (current[0] !== upcoming[0]) {
    return upcoming
  }

  return [
    current[0],
    hashAtom({
      current: current[1],
      upcoming: upcoming[1],
      cached: cached && cached[1],
    }),
  ]
}

module.exports = pairAtom
