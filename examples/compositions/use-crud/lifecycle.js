/**
 * Vue 3 composition API life cycle hooks
 * See docs: https://v3.vuejs.org/api/composition-api.html#lifecycle-hooks
 */

/**
 * For registering mounted() hook in setup
 *
 * Use with onMounted.
 * For example: onMounted(() => useModule.mounted())
 */
const mounted = () => {
  // Do something in mounted()
};

/**
 * For registering updated() hook in setup
 *
 * Use with onUpdated.
 * For example: onUpdated(() => useModule.updated())
 */
const updated = () => {
  // Do something in updated()
};

/**
 * For registering unmounted() hook in setup
 *
 * Use with onUnmounted.
 * For example: onUnmounted(() => useModule.unmounted())
 */
const unmounted = () => {
  // Do something in unmounted()
};

export default {
  /**
   * Hook function in composition, must be invoked in setup()
   */
  mounted,
  /**
   * Hook function in composition, must be invoked in setup()
   */
  updated,
  /**
   * Hook function in composition, must be invoked in setup()
   */
  unmounted
};
