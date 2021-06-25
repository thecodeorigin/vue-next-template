<template>
  <div class="default__layout">
    <MyNavbar />
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { MyNavbar } from '@/core/components/layout'
export default defineComponent({
  name: 'DefaultLayout',
  components: {
    MyNavbar,
  },
})
</script>
