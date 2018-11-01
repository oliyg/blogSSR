import React from 'react'

const Detail = (props) => {
  const { id } = props.match.params
  return (
    <div>
      detail page {id}
    </div>
  )
}

export default Detail
