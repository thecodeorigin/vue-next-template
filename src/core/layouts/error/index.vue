<template>
  <div class="error__layout">
    <slot />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'errorPage',
})
</script>
<style lang="scss" scoped>
.error__layout {
  background-color: var(--color-danger-700);
  background-image: url('/img/bg-green.svg');
  background-position: center;
  background-size: cover;
  background-blend-mode: soft-light;
}
</style>
