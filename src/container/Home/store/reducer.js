import { CHANGE_BLOGLIST } from './constants'

const defaultState = {
  blogList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_BLOGLIST:
      return {
        ...state,
        blogList: action.value
      }
    default:
      return state
  }
}
