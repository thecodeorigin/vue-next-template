/**
 * Global mixin, these features will be available in
 * every components in the application
 */
export const globalMixin = {
  methods: {
    /**
     * To evaluate a parameter in <template>
     * @param {any} param Keep as many annotations as possible
     * @param {string} evalString Example: something?.somethingElse
     * @returns {any} Return evaluated param?.something?.somethingElse
     */
    $e(param, evalString) {
      // eslint-disable-next-line no-useless-escape
      if (/^([a-zA-Z0-9\[\].?])*$/g.test(evalString)) {
        // eslint-disable-next-line no-eval
        return eval("param?." + evalString);
      } else {
        return null;
      }
    }
  },
  created() {
    console.log("[Global mixin created]", "Hello");
  }
};
