import { RouteConfig } from 'react-router-config'

import Home from '../pages/home'
import Register from '../pages/register'

const routes: RouteConfig[] = [{
  path: '/',
  exact: true,
  component: Home
}, {
  path: '/register',
  component: Register
}, {
  path: '/extra',
  component: Home
}]

export default routes
