import React from 'react'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const style = {
  button: {
    display: 'block',
    margin: '0 auto',
    marginTop: 20
  }
}

const LoadMoreBtn = props => {
  const { classes, onClick } = props
  return (
    <Button onClick={onClick} variant="outlined" color="primary" className={classes.button}>查看更多</Button>
  )
}

export default withStyles(style)(LoadMoreBtn)
