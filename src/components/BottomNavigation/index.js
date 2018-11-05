import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { withStyles } from '@material-ui/core/'

const styles = theme => ({
  wrapper: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    marginLeft: '-16'
  }
})

class Header extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, value) {
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
    const { classes } = this.props
    return (
      <BottomNavigation
        value={this.state.value}
        onChange={this.handleChange}
        showLabels
        className={classes.wrapper}
      >
        <BottomNavigationAction label="主页" icon={<HomeIcon />} />
        <BottomNavigationAction label="登录" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="关于" icon={<InfoIcon />} />
      </BottomNavigation>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
