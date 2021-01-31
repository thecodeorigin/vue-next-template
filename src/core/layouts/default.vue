<template>
  <div class="default__layout">
    <Navbar />
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Navbar } from "@/core/components/layout";
export default defineComponent({
  name: "defaultLayout",
  components: {
    Navbar
  }
});
</script>

<style scoped></style>
