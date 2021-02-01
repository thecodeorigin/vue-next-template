<template>
  <component :is="layout">
    <router-view @layout="updateLayout" />
  </component>
</template>

<script>
import { defineComponent } from 'vue'
// Import layout components here
// Can't use 'default' for component's name
import defaultLayout from '@layouts/default.vue'
/**
 * Root component
 */
export default defineComponent({
  name: 'Root',
  components: {
    defaultLayout,
  },
  data() {
    return {
      layout: 'defaultLayout',
    }
  },
  methods: {
    /**
     * Use this.$emit('layout', '[LAYOUT_NAME]') in your page component
     */
    updateLayout(layout) {
      this.layout = layout
    },
  },
})
</script>
