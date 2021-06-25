<template>
  <div class="forgot-password-page">
    ForgotPasswordPage
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useHead } from '@plugins/meta'
export default defineComponent({
  name: 'ForgotPasswordPage',
  setup() {
    useHead()
  },
})
</script>
