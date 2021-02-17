// In Vue 3, it is no longer possible to use these APIs to listen to a component's
// own emitted events from within a component, there is no migration path for that use case.

// But the eventHub pattern can be replaced by using an external library implementing
// the event emitter interface, for example mitt (opens new window)or tiny-emitter (opens new window).
// See docs: https://v3.vuejs.org/guide/migration/events-api.html

// How to use this event emitter:
// In your component instance with 'this', use this.$bus.emit and this.$bus.on as Vue 2 syntax
// In your composition without access to 'this', import { bus } from this plugin and use bus.emit and bus.on
// Mitt was made for the browser, but works in any JavaScript runtime. It has no dependencies and supports IE9+.

import mitt from 'mitt'

export const bus = mitt()

export const eventBusPlugin = {
  install(app) {
    app.config.globalProperties.$bus = bus
  },
}
