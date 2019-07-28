const { Strategy } = require('../strategy')

class PackageJsonStrategy extends Strategy {}
const packageJsonStrategy = new PackageJsonStrategy({
  json: [
    'scripts',
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'optionalDependencies',
    'bundledDependencies',
  ],
})

module.exports = {
  PackageJsonStrategy,
  packageJsonStrategy,
}