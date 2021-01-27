<template>
  <div class="text-center">
    <HelloWorld msg="This is the home page" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
export default defineComponent({
  components: {
    HelloWorld
  },
  inject: ["globalDI"],
  mounted() {
    /**
     * This function is injected in main.js with exampleDI plugin as globalDI
     * See plugin file @/src/core/plugins/exampleDI.js
     *
     * This is an example of using a regular plugin in Vue 3
     */
    this.$examplePlugin("[Home component mounted]");
    /**
     * This function is injected in main.js with exampleDI plugin as globalDI
     * See plugin file @/src/core/plugins/exampleDI.js
     *
     * This is an example of using dependency injection for plugin in Vue 3
     */
    this.globalDI.$exampleDIFunction("[Home component mounted]");
  }
});
</script>
