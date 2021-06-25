<template>
  <div class="auth__layout">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AuthLayout',
})
</script>
