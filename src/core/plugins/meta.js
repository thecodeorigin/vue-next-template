import { useMeta } from 'vue-meta'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
export const useHead = (title = '') => {
  const route = useRoute()
  const { t } = useI18n()
  useMeta({
    title: title || t(route.meta.title),
  })
}
