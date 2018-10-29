import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import style from './style'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import { withStyles } from '@material-ui/core/'

const styles = theme => ({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
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

  componentWillMount () {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(style._getCss())
    }
  }

  handleChange (event, value) {
    this.setState({ value })
    switch (value) {
      case 0:
        this.props.history.push('/')
        break
      case 1:
        this.props.history.push('/about')
        break
    }
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.wrapper}>
        <BottomNavigation
          value={this.state.value}
          onChange={this.handleChange}
          showLabels
        >
          <BottomNavigationAction label="主页" icon={<HomeIcon />} />
          <BottomNavigationAction label="关于" icon={<InfoIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
