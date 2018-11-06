import React from 'react'
import style from './style.styl'

const LoadMoreBtn = props => {
  const { onClick } = props
  return (
    <button onClick={onClick} className={style.button}>查看更多</button>
  )
}

export default LoadMoreBtn
