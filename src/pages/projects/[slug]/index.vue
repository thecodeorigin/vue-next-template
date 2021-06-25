<template>
  <div class="project-detail-page">
    <h1>This is the project detail page</h1>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ProjectDetailPage',
  metaInfo() {
    return {
      title: this.$route.params.slug,
      titleTemplate: this.$t(this.$route.meta.title) + ' | %s',
    }
  },
})
</script>
