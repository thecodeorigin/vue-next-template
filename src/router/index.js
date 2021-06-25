import dashboard from '@/pages/dashboard/route'
import projects from '@/pages/projects/route'
import authPages from '@/pages/auth/route'
import sandbox from '@/core/pages/sandbox/route'
import error500 from '@/core/pages/error/500/route'
import error404 from '@/core/pages/error/404/route'
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@middleware/auth'

const routes = [
  dashboard,
  projects,
  authPages,
  // Core pages
  sandbox,
  error500,
  error404,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Global middleware
router.beforeEach(auth)

export { router }
