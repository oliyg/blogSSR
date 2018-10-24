import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

export default (store, routes, req) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          { // 遍历路由使用 Route 挂载
            routes.map(route => (
              <Route {...route} />
            ))
          }
        </div>
      </StaticRouter>
    </Provider>
  ))
  return (`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
  </head>
  <body>
      <div id="root">${content}</div>
      <script>window.context = { state: ${JSON.stringify(store.getState())} }</script>
      <script src="/index.js"></script>
  </body>
  </html>`)
}
