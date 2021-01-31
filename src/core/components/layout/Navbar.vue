<template>
  <nav
    class="relative flex justify-between items-center h-16 bg-primary-default px-8"
  >
    <div>
      <span class=" text-white font-bold">
        {{ $t("home.title") }}
      </span>
    </div>
    <div>
      <button
        class="py-2 px-4 bg-success-500 hover:bg-success-600 active:bg-success-700 text-white font-semibold rounded-lg shadow-md focus:outline-none duration-300"
      >
        Some button
      </button>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Navbar",
  props: {},
  data() {
    return {
      //
    };
  }
});
</script>

<style></style>
