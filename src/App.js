import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'

const App = (props) => {
  return (
    <div>
      {/* 子组件引用 staticContext 需通过 prop 传递 */}
      <Header staticContext={props.staticContext} />
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default App
