<template>
  <div class="mobile__layout">
    <!-- Slot is required -->
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'mobileLayout',
})
</script>
