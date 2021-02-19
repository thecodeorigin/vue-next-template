<template>
  <div
    class="internalServerErrorPageComponent flex justify-center items-center h-screen"
  >
    <div class="text-center">
      <h1 class="text-9xl text-white font-black">
        500
      </h1>
      <h2 class="text-6xl text-white font-black">
        {{ $route.query.message || $t('error.INTERNAL_SERVER_ERROR') }}
      </h2>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import { bus } from '@plugins/mitt'
export default defineComponent({
  name: 'internalServerErrorPage',
  setup() {
    onMounted(() => {
      bus.emit('layout', 'error')
    })
  },
})
</script>
