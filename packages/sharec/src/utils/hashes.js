const pick = require('lodash/pick')
const omit = require('lodash/omit')
const deepmerge = require('deepmerge')

const mergeHashes = (a = {}, b = {}) => ({
  ...a,
  ...b,
})

const deepMergeHashes = (a = {}, b = {}) => deepmerge(a, b)

const mergeHashesWithKeys = (a = {}, b = {}, keys = []) => {
  const pickedA = pick(a, keys)
  const pickedB = pick(b, keys)

  return {
    ...pickedA,
    ...pickedB,
  }
}

const deepMergeHashesWithKeys = (a = {}, b = {}, keys = []) => {
  const pickedA = pick(a, keys)
  const pickedB = pick(b, keys)

  return deepmerge(pickedA, pickedB)
}

const mergeHashesWithoutKeys = (a = {}, b = {}, keys = []) => {
  const pickedA = omit(a, keys)
  const pickedB = omit(b, keys)

  return {
    ...pickedA,
    ...pickedB,
  }
}

const deepMergeHashesWithoutKeys = (a = {}, b = {}, keys = []) => {
  const pickedA = omit(a, keys)
  const pickedB = omit(b, keys)

  return deepmerge(pickedA, pickedB)
}

module.exports = {
  mergeHashes,
  deepMergeHashes,
  mergeHashesWithKeys,
  deepMergeHashesWithKeys,
  mergeHashesWithoutKeys,
  deepMergeHashesWithoutKeys,
}