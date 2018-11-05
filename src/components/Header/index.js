import React from 'react'
import PropTypes from 'prop-types'
import style from './style.styl'

const Header = (props) => {
  const { location } = props
  return (
    <div className={style.container}>
      {location.pathname.substring(1).length === 0 ? 'HOME' : location.pathname.substring(1).toUpperCase()}
    </div>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired
}

export default Header
