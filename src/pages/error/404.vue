<template>
  <div
    class="notFoundErrorPageComponent flex justify-center items-center h-screen"
  >
    <div class="text-center">
      <h1 class="text-9xl text-white font-black">
        404
      </h1>
      <h2 class="text-6xl text-white font-black">
        {{ $t('error.NOT_FOUND') }}
      </h2>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import { bus } from '@plugins/mitt'
export default defineComponent({
  name: 'notFoundErrorPage',
  setup() {
    onMounted(() => {
      bus.emit('layout', 'error')
    })
  },
})
</script>
