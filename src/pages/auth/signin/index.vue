<template>
  <div class="signin-page">
    SigninPage
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useHead } from '@plugins/meta'
export default defineComponent({
  name: 'SigninPage',
  setup() {
    useHead()
  },
})
</script>
