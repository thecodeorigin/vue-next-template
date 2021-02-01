<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ExampleComponent',
  props: {
    msg: String,
  },
  data() {
    return {
      //
    }
  },
})
</script>
