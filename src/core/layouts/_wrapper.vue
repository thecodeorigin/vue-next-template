<script lang="ts">
import { defineComponent, h, computed } from "vue";
import { useRoute } from "vue-router";
import { Layout } from "@/core/constants/layout.enum";

import DefaultLayout from "@/core/layouts/default.vue";
import BlankLayout from "@/core/layouts/blank.vue";

const LayoutMap = Object.freeze({
  [Layout.DEFAULT]: DefaultLayout,
  [Layout.BLANK]: BlankLayout,
});

export default defineComponent({
  name: "LayoutWrapper",
  setup(props, { slots }) {
    const route = useRoute();

    const layoutVNode = computed(() => {
      const layout = route.meta.layout as Layout;

      return LayoutMap[layout] || DefaultLayout;
    });

    return () => h(layoutVNode.value, () => slots.default?.());
  },
});
</script>
