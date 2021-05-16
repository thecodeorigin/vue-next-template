import { createI18n } from 'vue-i18n'

const en = {}
const vi = {}

// See docs: https://webpack.js.org/guides/dependency-management/#context-module-api
const requireModule = require.context(
  '../../locales',
  true,
  /^(?!.*index).*\.js$/ /* Every javascript file except index.js file */
)
requireModule.keys().forEach((fileName) => {
  const module = requireModule(fileName).default

  const temp = fileName
    .replace(/(\.\/|\.js)/g /* Remove "./" and ".js" */, '')
    .split('/')
  const moduleName = temp.length > 1 ? temp[temp.length - 2] : temp[0]

  switch (temp[temp.length - 1]) {
    case 'en':
      en[moduleName] = module
      break
    case 'vi':
      vi[moduleName] = module
      break
    default:
      break
  }
})

export const i18nPlugin = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  // set locale messages
  messages: {
    en,
    vi,
  },
  // If you need to specify other options, you can set other options
  // ...
})
