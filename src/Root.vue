<script lang="ts">
import { defineComponent, h, computed } from "vue";
import { useRoute } from "vue-router";
import { Layout } from "@/core/constants/layout.enum";
import { useRootStore } from "@/core/store";

import DefaultLayout from "@/core/layouts/default.vue";
import BlankLayout from "@/core/layouts/blank.vue";

const LayoutMap = Object.freeze({
  [Layout.DEFAULT]: DefaultLayout,
  [Layout.BLANK]: BlankLayout,
});

export default defineComponent({
  setup() {
    const rootStore = useRootStore();
    const route = useRoute();

    const layoutVNode = computed(() => {
      const layout = route.meta.layout as Layout;

      return LayoutMap[layout] || DefaultLayout;
    });

    const isDarkMode = computed(() => rootStore.$state.isDarkMode);

    return () =>
      h(
        "div",
        { class: ["min-h-screen", isDarkMode.value ? "dark" : ""] },
        h(layoutVNode.value)
      );
  },
});
</script>
