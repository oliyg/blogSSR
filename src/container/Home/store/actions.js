import { CHANGE_BLOGLIST } from './constants'

const changeList = (results) => ({
  type: CHANGE_BLOGLIST,
  value: results
})

export const getBlogList = () => {
  return (dispatch, getState, axiosRequest) => {
    return axiosRequest.get('/blog', {
      params: { limit: 15, page: 1, pagination: true }
    }).then(d => {
      d = d.data
      const results = d.results
      const meta = d.meta
      dispatch(changeList(results))
    })
  }
}
