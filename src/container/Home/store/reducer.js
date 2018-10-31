import { CHANGE_BLOGLIST, APPEND_BLOGLIST } from './constants'

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
    case APPEND_BLOGLIST:
      return {
        ...state,
        blogList: state.blogList.concat(action.value)
      }
    default:
      return state
  }
}
