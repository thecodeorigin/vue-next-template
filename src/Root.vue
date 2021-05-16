<template>
  <div v-cloak>
    <component
      :is="layout"
      :class="{
        dark: isDarkMode,
      }"
    >
      <router-view />
    </component>
    <transition name="el-fade-in">
      <Loading v-if="isLoading" />
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// Import layout components here
import defaultLayout from '@layouts/default.vue'
// Auth
import unauthLayout from '@layouts/auth/unauth.vue'
import authLayout from '@layouts/auth/index.vue'
// Error
import errorLayout from '@layouts/error/index.vue'
// Responsive
import mobileLayout from '@layouts/responsive/mobile.vue'
// Loading component
import Loading from '@/core/components/layout/Loading.vue'
import { camelCase } from 'lodash'
import { rootActions } from './store/enums'
// App component
export default defineComponent({
  name: 'App',
  components: {
    defaultLayout,
    unauthLayout,
    authLayout,
    errorLayout,
    mobileLayout,
    Loading,
  },
  provide() {
    return {
      loading: {
        on: () => {
          this.isLoading = true
        },
        off: () => {
          this.isLoading = false
        },
      },
    }
  },
  data() {
    return {
      isDarkMode: false,
      isLoading: false,
    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout
        ? camelCase(this.$route.meta.layout + '_layout')
        : 'defaultLayout'
    },
  },
  methods: {
    initiateVueApp() {
      this.$store.dispatch(rootActions.VUE_SERVER_INIT)
    },
    toggleDarkMode() {
      this.isDarkMode = this.isDarkMode ? false : true
    },
  },
  created() {
    this.initiateVueApp()
    // Use busEvent to trigger these listeners
    // bus.emit('toggleDarkMode')
    this.$bus.on('toggleDarkMode', () => {
      this.toggleDarkMode()
    })
  },
})
</script>
