/**
 * An example of writing a plugin using dependency injection pattern.
 * Vue provides provide/inject in the Vue instance to serve this purpose.
 *
 * See docs: https://v3.vuejs.org/guide/component-provide-inject.html#provide-inject
 *
 * This will be injected globally by using provide() method
 * Have a good example here for app.provide(): https://learnvue.co/2020/03/designing-vue3-plugins-using-provide-and-inject/
 */
export const exampleDIPlugin = {
  $exampleDIFunction(componentName = '') {
    console.log('[Example DI plugin]', 'Hello', componentName)
  },
}
