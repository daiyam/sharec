const { fixtures } = require('testUtils')
const { eslintJson } = require('../eslint')

describe('schemas > eslint', () => {
  describe('JSON', () => {
    const eslintBaseFxt = fixtures('eslint/json/01-base', 'json')

    it('should merge configs', () => {
      expect(
        eslintJson({
          current: eslintBaseFxt.current,
          upcoming: eslintBaseFxt.upcoming,
        }),
      ).toEqual(eslintBaseFxt.result)
    })
  })
})
