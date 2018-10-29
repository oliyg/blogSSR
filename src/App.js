import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'
import BottomNavigation from './components/BottomNavigation'
import Header from './components/Header'

const App = (props) => {
  return (
    <Fragment>
      <Header location={props.location} />
      {/* 子组件引用 staticContext 需通过 prop 传递 */}
      {renderRoutes(props.route.routes)}
      <BottomNavigation staticContext={props.staticContext} history={props.history} />
    </Fragment>
  )
}

export default App
