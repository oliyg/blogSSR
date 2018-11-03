import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../container/Home/store/'
import { reducer as detailReducer } from '../container/Detail/store/'
import axiosClient from '../client/request'
import axiosServer from '../server/request'

const reducer = combineReducers({
  home: homeReducer,
  detail: detailReducer
})

const getStore = () => createStore(reducer, applyMiddleware(thunk.withExtraArgument(axiosServer)))
const getClientStore = () => {
  // window 注水和脱水 客户端同步 state
  const defaultState = window.context.state
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(axiosClient)))
}

export { getStore, getClientStore }
