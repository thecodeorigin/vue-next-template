import { createApp } from 'vue'
import { router } from '@router'
import { store } from '@store'
// Services
import { clientApiPlugin } from '@apis/client'
import { authApiPlugin } from '@apis/auth'
// Mixins
import { globalMixin } from '@mixins/global'
// Plugins
import { i18nPlugin } from '@plugins/i18n'
import { eventBusPlugin } from '@plugins/mitt'
import { examplePlugin } from '@plugins/example'
import { exampleDIPlugin } from '@plugins/exampleDI'
import { errorHandlingPlugin } from '@plugins/error'
//
import { utils } from '@utils'
import Root from '@/Root.vue'

import '@/core/styles/css/main.css'
import '@/core/styles/scss/main.scss'

// Check the imported files for code explanation
createApp(Root)
  .use(utils)
  .use(store)
  .use(router)
  .use(clientApiPlugin)
  .use(authApiPlugin)
  .use(i18nPlugin)
  .use(eventBusPlugin)
  .use(errorHandlingPlugin)
  .use(examplePlugin) // Used in home page
  .provide('globalDI', exampleDIPlugin) // Used in home page
  .mixin(globalMixin)
  .mount('#app')
