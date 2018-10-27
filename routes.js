import Home from './src/container/Home/'
import About from './src/container/About/'
import PageNotFound from './src/container/PageNotFound/'
import App from './src/App'

export default [{
  path: '/',
  component: App,
  routes: [{
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
  }, {
    component: PageNotFound
  }]
}]
