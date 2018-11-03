import React from 'react'
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

function DetailCard (props) {
  const { classes, detailData } = props
  const { id, title, count, content } = detailData

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography component="p">
          {content}
        </Typography>
      </Paper>
    </div>
  )
}

DetailCard.propTypes = {
  classes: PropTypes.object.isRequired,
  detailData: PropTypes.object.isRequired
}

export default withStyles(styles)(DetailCard)
