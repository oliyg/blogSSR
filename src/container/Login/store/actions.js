import { CHANGE_LOGIN_STATUS } from './constants'

const changeLoginStatus = value => ({
  type: CHANGE_LOGIN_STATUS,
  value
})

export const login = value => {
  return (dispatch, getState, axiosRequest) => {
    return axiosRequest.post('/user/login', {
      userInfo: {
        username: value.username,
        passwd: value.password
      }
    }).then(d => {
      if (d.status === 200 && d.data) {
        dispatch(changeLoginStatus('登陆成功'))
        window.localStorage.setItem('isLogin', true)
        window.localStorage.setItem('loginToken', d.data.jwt)
        window.localStorage.setItem('username', d.data.username)
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    }).catch(e => {
      dispatch(changeLoginStatus('登录失败，用户名或密码错误'))
    })
  }
}
