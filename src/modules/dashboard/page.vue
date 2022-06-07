<template>
  <div class="dashboard">
    <h1 :class="$style.cssModuleClass">This is a dashboard page</h1>
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
