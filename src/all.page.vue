<template>
  <div :class="{ class: ['min-h-screen', isDarkMode ? 'dark' : ''] }">
    <LayoutWrapper>
      <router-view v-slot="{ Component }">
        <Suspense v-if="Component">
          <component :is="Component" />
        </Suspense>
      </router-view>
    </LayoutWrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { useRootStore } from "@/core/store";

import LayoutWrapper from "@/core/layouts/_wrapper.vue";

export default defineComponent({
  components: { LayoutWrapper },
  setup() {
    const rootStore = useRootStore();

    const isDarkMode = computed(() => rootStore.$state.isDarkMode);

    return { isDarkMode };
  },
});
</script>
