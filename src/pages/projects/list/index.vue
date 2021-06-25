<template>
  <div class="projects-page">
    <h1>This is a projects list page</h1>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ProjectsPage',
  metaInfo() {
    return {
      title: this.$route.params.slug,
      titleTemplate: this.$t(this.$route.meta.title) + ' | %s',
    }
  },
})
</script>
