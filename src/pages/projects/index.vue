<template>
  <div class="project-wrapper">
    <h1>This is the project wrapper page</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import { store } from '@/store'
import { defineComponent, onUnmounted } from 'vue'
import { projectStore } from '@/store-lazy/project'
export default defineComponent({
  name: 'ProjectWrapperPage',
  setup() {
    // Dynamic vuex module
    if (!store.hasModule('project')) {
      store.registerModule('project', projectStore, {
        preserveState: false,
      })
    }
    // Only exist when viewing this page and it's sub-pages
    onUnmounted(() => {
      store.unregisterModule('project')
    })
  },
})
</script>
