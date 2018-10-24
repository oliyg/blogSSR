import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from '../../routes'
import { getClientStore } from '../store/'

// getClientStore 需要通过 window 配合注水和脱水
const App = () => (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <div>
        {
          routes.map(route => (
            <Route {...route} />
          ))
        }
      </div>
    </BrowserRouter>
  </Provider>
)

// 需要调用 hydrate 方法
ReactDOM.hydrate(<App />, document.getElementById('root'))
