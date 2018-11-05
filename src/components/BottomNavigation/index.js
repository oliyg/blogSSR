import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import style from './style.styl'

class Header extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (value) {
    this.setState({ value })
    switch (value) {
      case 0:
        this.props.history.push('/')
        break
      case 1:
        this.props.history.push('/login')
        break
      case 2:
        this.props.history.push('/about')
        break
    }
  }

  render () {
    const arr = ['主页', '登录', '关于']
    return (
      <ul ref="list" className={style.container}>
        {
          arr.map((item, index) => <li className={
            (index === this.state.value) ? style.active_item : ''
          } label={item} onClick={(e) => { this.handleClick(index) }} key={index}>{item}</li>)
        }
      </ul>
    )
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired
}

export default Header
