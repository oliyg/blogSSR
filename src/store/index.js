import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../container/Home/store/'

const reducer = combineReducers({
  home: homeReducer
})

const getStore = () => createStore(reducer, applyMiddleware(thunk))
const getClientStore = () => {
  // window 注水和脱水 客户端同步 state
  const defaultState = window.context.state
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}

export { getStore, getClientStore }
