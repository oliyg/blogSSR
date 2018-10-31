import { CHANGE_BLOGLIST, APPEND_BLOGLIST } from './constants'

const changeList = (results) => ({
  type: CHANGE_BLOGLIST,
  value: results
})
const appendList = (results) => ({
  type: APPEND_BLOGLIST,
  value: results
})

export const getBlogList = (currentPage = 1) => {
  return (dispatch, getState, axiosRequest) => {
    return axiosRequest.get('/blog', {
      params: { limit: 3, page: currentPage, pagination: true }
    }).then(d => {
      d = d.data
      const results = d.results
      currentPage === 1 ? dispatch(changeList(results)) : dispatch(appendList(results))
    })
  }
}
