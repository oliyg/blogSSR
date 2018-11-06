import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import style from './style.styl'

const DetailCard = (props) => {
  const { detailData } = props
  console.log(detailData)
  const { title, count, content } = detailData
  const date = dayjs(detailData.created_at).format('YYYY年MM月DD日')
  const updateDate = dayjs(detailData.updated_at).format('YYYY年MM月DD日')

  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <div className={style.count}>{count}次阅读</div>
      <div className={style.detail}>
        <div className={style.detail_item}>发布日期 {date}</div>
        <div className={style.detail_item}>更新日期 {updateDate}</div>
      </div>
      <div className={style.content}>{content}</div>
    </div>
  )
}

DetailCard.propTypes = {
  detailData: PropTypes.object.isRequired
}

export default DetailCard
