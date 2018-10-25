import Home from './src/container/Home/'
import About from './src/container/About/'

export default [{
  path: '/',
  component: Home,
  key: 'Home',
  exact: true,
  loadData: Home.loadData
}, {
  path: '/about',
  component: About,
  key: 'About',
  exact: true
}]
