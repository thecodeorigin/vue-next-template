<template>
  <div class="signup-page">
    Signup page
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useHead } from '@plugins/meta'
export default defineComponent({
  name: 'SignupPage',
  setup() {
    useHead()
  },
})
</script>
