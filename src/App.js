import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'

const App = (props) => {
  return (
    <div>
      <div>
        {/* 子组件引用 staticContext 需通过 prop 传递 */}
        {renderRoutes(props.route.routes)}
      </div>
      <Header staticContext={props.staticContext} history={props.history} />
    </div>
  )
}

export default App
