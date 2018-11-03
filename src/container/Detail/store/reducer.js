import { GET_BLOGDETAIL, GET_DETAIL } from './constants'

const defaultState = {
  blogDetail: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        blogDetail: action.value
      }
    default:
      return state
  }
}
