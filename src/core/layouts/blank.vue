<template>
  <div class="blank__layout">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BlankLayout',
})
</script>
