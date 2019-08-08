module.exports = wallaby => ({
  files: [
    '!node_modules/**',
    '!src/**/*.test.js',
    'package.json',
    'jest.setup.js',
    'src/**/*.js',
    'src/**/*.json',
    'test/fixtures/**/*',
  ],

  tests: ['!node_modules/**', '!test/fixtures/**/*', 'src/**/*.test.js'],

  env: {
    type: 'node',
  },

  testFramework: 'jest',

  setup: wallaby => {
    const { jest } = require('./package.json')

    wallaby.testFramework.configure(jest)
  },
})