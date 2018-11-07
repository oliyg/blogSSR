export const sendNewBlog = value => {
  return (dispatch, getState, axiosRequest) => {
    return axiosRequest.post('/blog', value, {
      headers: {
        authorization: window.localStorage.getItem('loginToken')
      }
    })
  }
}
