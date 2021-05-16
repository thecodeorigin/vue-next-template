<template>
  <div
    class="internalServerErrorPageComponent flex justify-center items-center h-screen"
  >
    <div class="text-center">
      <h1 class="text-9xl text-white font-black">
        500
      </h1>
      <h2 class="text-6xl text-white font-black">
        {{ $route.query.message || $t('error.500') }}
      </h2>
      <div class="mt-5">
        <span
          @click="$router.go(-1)"
          class="inline-block w-32 p-3 m-3 border-white text-white font-bold border-4 rounded-full hover:bg-white hover:text-danger cursor-pointer duration-300"
        >
          <i class="fas fa-arrow-circle-left"></i>
          <span> Back </span>
        </span>
        <span
          @click="$router.push('/')"
          class="inline-block w-40 p-3 m-3 border-white text-danger text-lg font-bold border-4 rounded-full bg-white cursor-pointer duration-300"
        >
          {{ 'Go Home' }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
// import { bus } from '@plugins/mitt'
export default defineComponent({
  name: 'internalServerErrorPage',
  setup() {
    onMounted(() => {
      // bus.emit('layout', 'error')
    })
  },
})
</script>
