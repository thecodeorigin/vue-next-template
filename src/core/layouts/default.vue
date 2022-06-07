<script lang="tsx">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  name: "BlankLayout",
  setup() {
    return () => <RouterView />;
  },
});
</script>
