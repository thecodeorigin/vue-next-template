<template>
  <div
    class="notFoundErrorPageComponent flex justify-center items-center h-screen"
  >
    <div class="text-center">
      <h1 class="text-9xl text-white font-black">
        404
      </h1>
      <h2 class="text-6xl text-white font-black">
        {{ $t('error.404') }}
      </h2>
      <div class="mt-5">
        <span
          @click="$router.go(-1)"
          class="inline-block w-40 p-3 m-3 border-white text-white font-bold border-4 rounded-full hover:bg-white hover:text-danger cursor-pointer duration-300"
        >
          <i class="fas fa-arrow-circle-left"></i>
          <span> {{ $t('error.go-back') }} </span>
        </span>
        <span
          @click="$router.push('/')"
          class="inline-block w-40 p-3 m-3 border-white text-danger text-lg font-bold border-4 rounded-full bg-white cursor-pointer duration-300"
        >
          {{ $t('error.go-home') }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useHead } from '@plugins/meta'
export default defineComponent({
  name: 'NotFoundErrorPage',
  setup() {
    useHead()
  },
})
</script>
