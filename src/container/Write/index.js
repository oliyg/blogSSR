import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style.styl'
import { sendNewBlog } from './store/actions'

class Write extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      title: '',
      tag: [],
      content: '',
      short: '',
      errMsg: ''
    }
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
  }
  handleClickSubmit () {
    const { sendNewBlog } = this.props
    const title = this.refs.title.value
    let tag = this.refs.tags.value.split(',')
    tag = tag.filter(item => (item !== ''))
    const content = this.refs.content.value
    const short = content
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
        <input ref="title" type="text" placeholder="文章标题" />
        <input ref="tags" type="text" placeholder="标签以逗号','分隔" />
        <textarea ref="content" className={style.content}></textarea>
        <button className={style.submit} onClick={this.handleClickSubmit}>提交</button>
        <button className={style.reset}>重置</button>
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
