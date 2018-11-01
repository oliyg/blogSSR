import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

const styles = {
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

const SimpleCard = props => {
  const { classes, blogItem } = props

  const tags = blogItem.tag.split(';').join(' ')
  const date = dayjs(blogItem.created_at).format('YYYY年MM月DD日')
  const short = blogItem.short.length > 120 ? blogItem.short.substr(0, 120) + '...' : blogItem.short
  console.log(blogItem.id)

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>{date}</Typography>
        <Typography variant="h5" component="h2">{blogItem.title}</Typography>
        <Typography className={classes.pos} color="textSecondary">{tags}</Typography>
        <Typography component="p">{short}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/detail/${blogItem.id}`} size="small">More</Button>
      </CardActions>
    </Card>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  blogItem: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleCard)
