// From vue-enterprise-template
// See repo: https://github.com/chrisvfritz/vue-enterprise-boilerplate
const path = require('path')
const fs = require('fs')
const prettier = require('prettier')

const aliases = {
  '@': 'src',
  '@core': 'src/core',
  '@locales': 'src/locales',
  '@pages': 'src/pages',
  '@router': 'src/router',
  '@styles': 'src/styles',
  '@store': 'src/store',
  '@use': 'src/use',
  // Core access
  '@constants': 'src/core/constants',
  '@layouts': 'src/core/layouts',
  '@middleware': 'src/core/middleware',
  '@mixins': 'src/core/mixins',
  '@plugins': 'src/core/plugins',
  '@apis': 'src/core/apis',
  '@utils': 'src/core/utils',
}

module.exports = {
  webpack: {},
  jsconfig: {},
}

for (const alias in aliases) {
  const aliasTo = aliases[alias]
  module.exports.webpack[alias] = resolveSrc(aliasTo)
  module.exports.jsconfig[alias + '/*'] = [aliasTo + '/*']
  module.exports.jsconfig[alias] = aliasTo.includes('/index.')
    ? [aliasTo]
    : [
        aliasTo + '/index.js',
        aliasTo + '/index.json',
        aliasTo + '/index.vue',
        aliasTo + '/index.scss',
        aliasTo + '/index.css',
      ]
}

const jsconfigTemplate = require('./jsconfig.template') || {}
const jsconfigPath = path.resolve(__dirname, 'jsconfig.json')

fs.writeFile(
  jsconfigPath,
  prettier.format(
    JSON.stringify({
      ...jsconfigTemplate,
      compilerOptions: {
        ...(jsconfigTemplate.compilerOptions || {}),
        paths: module.exports.jsconfig,
      },
    }),
    {
      ...require('./.prettierrc'),
      parser: 'json',
    }
  ),
  (error) => {
    if (error) {
      console.error(
        'Error while creating jsconfig.json from aliases.config.js.'
      )
      throw error
    }
  }
)

function resolveSrc(_path) {
  return path.resolve(__dirname, _path)
}
