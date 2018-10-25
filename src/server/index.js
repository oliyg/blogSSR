import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import { getStore } from '../store/'
import render from './utils/render'
import routes from '../../routes'

const app = express()

app.use(express.static('public'))
app.use('/api', proxy('hapiblog.oliyg.com', {
  https: true,
  proxyReqPathResolver: (req) => {
    console.log(req.url, 'proxing...')
    return `${req.url}`
  }
}))
app.get('*', (req, res) => {
  const store = getStore()

  // 服务端匹配路由并异步获取数据 start
  const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(() => {
    res.send(render(store, routes, req))
  })
  // 服务端匹配路由并异步获取数据 end
})

const config = {
  PORT: 3000,
  HOST: 'localhost'

}

app.listen(config.PORT, config.HOST, () => {
  console.log(`server listening at ${config.HOST}:${config.PORT}`)
})
