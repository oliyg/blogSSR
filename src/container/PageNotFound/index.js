import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

class PageNotFound extends Component {
  componentWillMount () {
    const { staticContext } = this.props
    staticContext && (staticContext.PAGE_NOT_FOUND = true)
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            404 Error
          </Typography>
          <Typography component="p">
            404 page not found... 404 错误 页面未找到
          </Typography>
        </Paper>
      </div>
    )
  }
}

PageNotFound.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PageNotFound)
