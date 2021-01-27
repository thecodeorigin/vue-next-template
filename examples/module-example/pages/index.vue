<template>
  <div>
    <ExampleComponent msg="This is a component" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import ExampleComponent from "../components/ExampleComponent.vue";
export default defineComponent({
  components: {
    ExampleComponent
  }
});
</script>
