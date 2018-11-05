import { CHANGE_LOGIN_STATUS } from './constants'

const initialState = {
  loginMsg: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN_STATUS:
      return {
        ...state,
        loginMsg: action.value
      }
    default:
      return state
  }
}
