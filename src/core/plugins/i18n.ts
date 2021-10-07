import { createI18n } from "vue-i18n";

export const i18nPlugin = createI18n({
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  // set locale messages
  messages: {
    en: {},
    vi: {},
  },
});
