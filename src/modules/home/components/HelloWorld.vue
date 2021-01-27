<template>
  <h1 class="text-4xl font-bold my-3">{{ msg }}</h1>
  <button
    @click="count++"
    class="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 duration-300 outline-none"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit <code>modules/home/components/HelloWorld.vue</code> to test hot module
    replacement.
  </p>
  <p>{{ something.abc }}</p>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      something: {
        abc: "sakdhkjashdk"
      }
    };
  }
});
</script>
