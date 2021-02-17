import about from '@pages/about/config'
import home from '@pages/home/config'
import authForgotPassword from '@pages/auth/forgot-password/config'
import authSignup from '@pages/auth/signup/config'
import authSignin from '@pages/auth/signin/config'
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@middleware/auth'

/**
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */
const routes = [
  ...about.routes,
  ...home.routes,
  // Auth pages
  ...authForgotPassword.routes,
  ...authSignup.routes,
  ...authSignin.routes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Global middleware
router.beforeEach(auth)

export { router }
