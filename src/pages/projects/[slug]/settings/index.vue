<template>
  <div class="project-settings-page">
    <h1>This is the project settings page</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ProjectSettingsPage',
  metaInfo() {
    return {
      title: this.$route.params.slug,
      titleTemplate: this.$t(this.$route.meta.title) + ' | %s',
    }
  },
})
</script>
