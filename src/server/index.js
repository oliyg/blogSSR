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
      const promise = new Promise(resolve => {
        // 解决资源加载错误 Promise.all 逻辑不执行问题
        item.route.loadData(store, req).then(resolve).catch(resolve) // 如果需要获取 req 路由则传递
      })
      promises.push(promise)
    }
  })
  Promise.all(promises).then(() => {
    let context = { css: [] } // 定义上下文
    let html = render(store, routes, req, context)
    if (context.PAGE_NOT_FOUND) {
      res.status(404); res.send(html)
    } else {
      res.send(html)
    }
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
