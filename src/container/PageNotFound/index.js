import React, { Component } from 'react'
import style from './style.styl'

class PageNotFound extends Component {
  componentWillMount () {
    const { staticContext } = this.props
    staticContext && (staticContext.PAGE_NOT_FOUND = true)
  }
  componentDidMount () {
    setTimeout(() => {
      window.location.replace('/')
    }, 3000)
  }

  render () {
    return (
      <div className={style.container}>
        <div className={style.title}>404 Error</div>
        <div className={style.content}>404 page not found... 404 错误 页面未找到</div>
      </div>
    )
  }
}

export default PageNotFound
