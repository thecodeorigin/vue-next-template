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
  const auth = localStorage.getItem('auth')
  // Check if authentication is not require
  if (to.meta?.authNotRequired) {
    // Then redirect user to home if they're authenticated
    if (auth) {
      return next({ name: 'home' })
    }
  }
  // If require authentication, check for auth
  if (to.meta.auth) {
    if (auth) {
      next()
    } else {
      next({ name: 'auth-signin' })
    }
    // If not, proceed
  } else {
    next()
  }
}
