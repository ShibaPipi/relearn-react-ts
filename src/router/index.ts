import { RouteConfig } from 'react-router-config'

import Home from '../pages/home'
import Register from '../pages/register'
import About from '../pages/about'
import NoMatch from '../pages/no-match'

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
}, {
  component: NoMatch
}]

export default routes
