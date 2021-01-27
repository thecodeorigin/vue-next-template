<template>
  <div class="default__layout text-center mt-5">
    <router-link
      to="/"
      class="font-bold mx-1 hover:text-green-600 duration-300"
    >
      Home
    </router-link>
    <router-link
      to="/about"
      class="font-bold mx-1 hover:text-green-600 duration-300"
    >
      About
    </router-link>
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "defaultLayout"
});
</script>

<style scoped></style>
