import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import style from './style.styl'

const SimpleCard = props => {
  const { blogItem } = props

  const tags = blogItem.tag.split(';').join(' ')
  const date = dayjs(blogItem.created_at).format('YYYY年MM月DD日')
  const short = blogItem.short.length > 120 ? blogItem.short.substr(0, 120) + '...' : blogItem.short

  return (
    <div className={style.container}>
      <div>
        <div className={style.date}>{date}</div>
        <div className={style.title}>{blogItem.title}</div>
        <div className={style.tags}>{tags}</div>
        <div className={style.short}>{short}</div>
        <Link className={style.btn} to={'/detail/' + blogItem.id} >More</Link>
      </div>
    </div>
  )
}

SimpleCard.propTypes = {
  blogItem: PropTypes.object.isRequired
}

export default SimpleCard
