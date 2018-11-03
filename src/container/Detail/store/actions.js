import { GET_BLOGDETAIL, GET_DETAIL } from './constants'

const getDetail = data => ({
  type: GET_DETAIL,
  value: data
})

export const getBlogDetail = id => {
  return (dispatch, getState, axiosRequest) => {
    return axiosRequest.get('/blog/' + id).then(d => {
      d = d.data
      dispatch(getDetail(d))
    })
  }
}
