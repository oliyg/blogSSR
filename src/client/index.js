import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import routes from '../../routes'
import { getClientStore } from '../store/'

// getClientStore 需要通过 window 配合注水和脱水
const App = () => (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <div>
        {
          renderRoutes(routes)
        }
      </div>
    </BrowserRouter>
  </Provider>
)

// 需要调用 hydrate 方法
ReactDOM.hydrate(<App />, document.getElementById('root'))
