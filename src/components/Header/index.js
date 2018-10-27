import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './style.css'

class Header extends Component {
  componentWillMount () {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(style._getCss())
    }
  }
  render () {
    return (
      <div className={style.wrapper}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    )
  }
}

export default Header
