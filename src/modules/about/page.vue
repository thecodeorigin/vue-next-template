<template>
  <div class="about">
    <h1 :class="$style.cssModuleClass">This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" module>
.cssModuleClass {
  color: red;
  font-weight: bold;
}
</style>
