import { RouteConfig } from 'react-router-config'

import Home from '../pages/home'
import Register from '../pages/register'
import About from '../pages/about'

const routes: RouteConfig[] = [{
  path: '/',
  exact: true,
  component: Home
}, {
  path: '/register',
  component: Register
}, {
  path: '/about',
  component: About
}]

export default routes
