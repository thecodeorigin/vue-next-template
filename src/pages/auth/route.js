import { Route } from '@/core/models/Route.js'
import forgotPassword from './forgot-password/route.js'
import signin from './signin/route.js'
import signup from './signup/route.js'
export default new Route({
  name: 'auth',
  path: '/auth',
  component: () => import('./index.vue'),
  children: [forgotPassword, signin, signup],
})
