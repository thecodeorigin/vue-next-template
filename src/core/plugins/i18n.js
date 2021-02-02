import { createI18n } from 'vue-i18n'
import localeModules from '@constants/locales'
export const i18nPlugin = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  // set locale messages
  messages: {
    en: localeModules.en,
    vi: localeModules.vi,
  },
  // If you need to specify other options, you can set other options
  // ...
})
