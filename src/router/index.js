import about from '@pages/about/config'
import home from '@pages/home/config'
// Sandbox
import sandbox from '@/core/pages/sandbox/config'
// Auth pages
import authForgotPassword from '@pages/auth/forgot-password/config'
import authSignup from '@pages/auth/signup/config'
import authSignin from '@pages/auth/signin/config'
// Errors
import errorPages from '@/core/pages/error/config'
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@middleware/auth'

/**
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */
 const routes = [
  ...sandbox.routes,
  // Pages
  ...about.routes,
  ...home.routes,
  // Auth pages
  ...authForgotPassword.routes,
  ...authSignup.routes,
  ...authSignin.routes,
  // Error pages
  ...errorPages.routes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Global middleware
router.beforeEach(auth)

export { router }
