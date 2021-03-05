import Home from '../pages/home'
import Register from '../pages/register'

const routes = [{
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
