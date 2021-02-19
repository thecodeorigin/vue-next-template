<template>
  <component
    :is="layout"
    :class="{
      dark: isDarkMode,
    }"
  >
    <router-view @layout="updateLayout" />
  </component>
</template>

<script>
import { defineComponent } from 'vue'
// Import layout components here
import defaultLayout from '@layouts/default.vue'
import blankLayout from '@layouts/blank.vue'
// Auth
import unauthLayout from '@layouts/auth/unauth.vue'
import authLayout from '@layouts/auth/index.vue'
// Error
import errorLayout from '@layouts/error/index.vue'
// Responsive
import mobileLayout from '@layouts/responsive/mobile.vue'

import { camelCase } from 'lodash'
// Root component
export default defineComponent({
  name: 'Root',
  components: {
    defaultLayout,
    blankLayout,
    unauthLayout,
    authLayout,
    errorLayout,
    mobileLayout,
  },
  data() {
    return {
      layout: 'defaultLayout',
      isDarkMode: false,
    }
  },
  methods: {
    updateLayout(layout) {
      this.layout = layout
    },
    toggleDarkMode() {
      this.isDarkMode = this.isDarkMode ? false : true
    },
  },
  created() {
    // Use busEvent to trigger these listeners

    // bus.emit('toggleDarkMode')
    this.$bus.on('toggleDarkMode', () => {
      this.toggleDarkMode()
    })
    // bus.emit('layout', LAYOUT_NAME)
    this.$bus.on('layout', (layout) => {
      // For example: bus.emit('layout', 'unauth') will trigger 'unauthLayout'
      this.updateLayout(camelCase(layout + '_layout'))
    })
  },
})
</script>
