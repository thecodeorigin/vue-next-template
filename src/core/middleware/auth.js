// Midlewares use beforeEach() in router
/**
 * @typedef {import("vue-router").RouteLocationNormalized} RouteLocationNormalized
 * @typedef {import("vue-router").NavigationGuardNext} NavigationGuardNext
 */

/**
 * Middleware for authentication
 * @param { RouteLocationNormalized } to
 * @param { RouteLocationNormalized } from
 * @param { NavigationGuardNext } next
 */
export const auth = (to, from, next) => {
  console.log('[Auth middleware]', 'Hello')
  next()
}
