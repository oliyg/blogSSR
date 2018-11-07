import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style.styl'
import { sendNewBlog } from './store/actions'

class Write extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      title: '',
      tag: '',
      content: '',
      short: '',
      errMsg: ''
    }
    this.handleChangeValue = this.handleChangeValue.bind(this)
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
    this.handleClickReset = this.handleClickReset.bind(this)
  }
  handleChangeValue (e, name) {
    this.setState({ [name]: e.target.value })
  }
  handleClickReset () {
    console.log('reset')
    this.setState({ title: '', tag: '', content: '', short: '', errMsg: '' }, () => { console.log(this.state) })
  }
  handleClickSubmit () {
    const { sendNewBlog } = this.props
    const { title, content } = this.state
    const tag = this.state.tag.split(',').filter(item => item !== '')
    const short = this.state.content
    const data = {
      blogData: {
        title,
        tag,
        content,
        short
      }
    }
    sendNewBlog(data).then(d => {
      (d.status === 200) ? console.log('send new blog success') : console.log('send new blog fail')
      if (d.status === 200) {
        this.setState({ errMsg: '发送成功，即将跳转到首页' }, () => {
          setTimeout(() => {
            window.location.replace('/')
          }, 2000)
        })
      }
    }).catch(e => {
      e = e.response.data
      if (e.statusCode === 400) {
        if (e.validation.keys[0] === 'blogData.title') {
          this.setState({ errMsg: '标题格式错误，请重试' })
        }
        if (e.validation.keys[0] === 'blogData.content') {
          this.setState({ errMsg: '内容格式错误，请重试' })
        }
      } else if (e.statusCode === 409) {
        this.setState({ errMsg: '今日已发送此篇文章，请修改标题和内容后重试' })
      } else if (e.statusCode === 401) {
        this.setState({ errMsg: '登录信息验证错误，请重新登录。正在跳转到登录页面' }, () => {
          setTimeout(() => {
            window.location.replace('/login')
          }, 2000)
        })
      }
    })
  }
  render () {
    return (
      <div className={style.container}>
        {
          this.state.errMsg ? <div className={style.msg}>{this.state.errMsg}</div> : ''
        }
        <input value={this.state.title} onChange={e => { this.handleChangeValue(e, 'title') }} type="text" placeholder="文章标题" />
        <input value={this.state.tag} onChange={e => { this.handleChangeValue(e, 'tag') }} type="text" placeholder="标签以逗号','分隔" />
        <textarea value={this.state.content} onChange={e => { this.handleChangeValue(e, 'content') }} className={style.content}></textarea>
        <button className={style.submit} onClick={this.handleClickSubmit}>提交</button>
        <button className={style.reset} onClick={this.handleClickReset}>重置</button>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  sendNewBlog (data) {
    return dispatch(sendNewBlog(data))
  }
})

export default connect(null, mapDispatch)(Write)
