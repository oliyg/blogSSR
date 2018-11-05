import Home from './src/container/Home/'
import About from './src/container/About/'
import PageNotFound from './src/container/PageNotFound/'
import App from './src/App'
import Detail from './src/container/Detail'
import Login from './src/container/Login'

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
    path: '/login',
    component: Login,
    key: 'Login',
    exact: true
  }, {
    path: '/about',
    component: About,
    key: 'About',
    exact: true
  }, {
    path: '/detail/:id',
    component: Detail,
    key: 'Detail',
    exact: true,
    loadData: Detail.loadData
  }, {
    component: PageNotFound
  }]
}]
