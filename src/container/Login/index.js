import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import style from './style.styl'
import { login } from './store/actions'

class Login extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      username: '',
      password: '',
      showLogin: true,
      loginUserName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getLoginInput = this.getLoginInput.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.login = this.props.login.bind(this)
  }
  componentDidMount () {
    if (window.localStorage.getItem('isLogin')) {
      this.setState({ showLogin: false })
      this.setState({ loginUserName: window.localStorage.getItem('username') })
    }
  }
  handleLogout () {
    window.localStorage.clear()
    window.location.reload()
  }
  handleSubmit (e) {
    this.setState({
      username: this.refs.username.value,
      password: this.refs.password.value
    }, () => {
      this.login({
        username: this.state.username,
        password: this.state.password
      })
    })
  }
  getLoginInput ({ loginMsg }) {
    return (
      <Fragment>
        {
          loginMsg ? <div className={style.msg}>{loginMsg}</div> : <Fragment></Fragment>
        }
        <input className={style.username} ref="username" placeholder="用户名" />
        <input className={style.password} ref="password" placeholder="密码" type="password" />
        <button className={style.submit} onClick={this.handleSubmit}>登录</button>
      </Fragment>
    )
  }
  render () {
    const { loginMsg } = this.props
    const { showLogin, loginUserName } = this.state
    return (
      <div className={style.container}>
        { loginUserName ? <div className={style.welcome}>{loginUserName}</div> : <Fragment></Fragment> }
        { showLogin ? this.getLoginInput({ loginMsg }) : <div className={style.msg} onClick={this.handleLogout}>您已经登陆，点击此处退出登陆</div> }
      </div>
    )
  }
}

// Login.propTypes = {}
const mapState = state => ({
  loginMsg: state.login.loginMsg
})

const mapDispatch = dispatch => ({
  login (value) {
    dispatch(login(value))
  }
})

const WrapperLogin = connect(mapState, mapDispatch)(Login)
export default WrapperLogin
