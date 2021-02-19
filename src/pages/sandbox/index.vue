<template>
  <div class="sandboxPageComponent"></div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import { bus } from '@plugins/mitt'
export default defineComponent({
  name: 'sandboxPage',
  beforeRouteEnter(to, from, next) {
    if (process.env.NODE_ENV === 'development') {
      next()
    } else {
      next({ name: 'home' })
    }
  },
  setup() {
    onMounted(() => {
      bus.emit('layout', 'error')
    })
  },
})
</script>
