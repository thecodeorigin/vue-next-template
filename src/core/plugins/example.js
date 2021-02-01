/**
 * This plugin can be accessed with this.$examplePlugin()
 * Got inject into Root component using regular app.use()
 * See more about app.use(): https://learnvue.co/2020/03/designing-vue3-plugins-using-provide-and-inject/
 *
 *
 * It's a good practice to add $ sign before global functions or variables
 * @function $examplePlugin
 * @param {String} componentName print out component name
 * @returns {void} Return nothing
 *
 * Read docs: https://v3.vuejs.org/guide/plugins.html#writing-a-plugin
 */
export const examplePlugin = {
  // eslint-disable-next-line no-unused-vars
  install(app, options) {
    /**
     * See more about app object: https://v3.vuejs.org/guide/migration/global-api.html#a-new-global-api-createapp
     *
     * This is a breaking change from Vue 2 Vue.prototype
     * See more at: https://v3.vuejs.org/guide/migration/global-api.html#vue-prototype-replaced-by-config-globalproperties
     */
    app.config.globalProperties.$examplePlugin = (componentName = '') => {
      console.log('[Example plugin]', 'Hello', componentName)
      console.log('[Example plugin]', '[app]', app)
    }
  },
}
