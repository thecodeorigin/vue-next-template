import { createApp } from 'vue'
import { router } from '@router'
import { store } from '@store'
import { createMetaManager, plugin as metaPlugin } from 'vue-meta'

const metaManager = createMetaManager()

import { clientApiPlugin } from '@apis/client'
import { authApiPlugin } from '@apis/auth'
import { i18nPlugin } from '@plugins/i18n'
import { eventBusPlugin } from '@plugins/mitt'
import { errorHandlingPlugin } from '@plugins/error'

import { globalMixin } from '@mixins/global'
import { utils } from '@utils'

import Root from '@/Root.vue'

import { baseComponents } from '@/core/components/base'

import '@/core/styles/css/main.css'
import '@styles/custom.scss'

// Check the imported files for code explanation
createApp(Root)
  .use(utils)
  .use(store)
  .use(router)
  .use(metaManager)
  .use(metaPlugin) // optional, only needed for OptionsAPI
  .use(clientApiPlugin)
  .use(authApiPlugin)
  .use(i18nPlugin)
  .use(eventBusPlugin)
  .use(errorHandlingPlugin)
  .mixin(globalMixin)
  .use(baseComponents)
  .mount('#app')
