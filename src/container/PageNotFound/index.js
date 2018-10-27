import React, { Component } from 'react'

class PageNotFound extends Component {
  componentWillMount () {
    const { staticContext } = this.props
    staticContext && (staticContext.PAGE_NOT_FOUND = true)
  }
  render () {
    return (
      <div>404 Page Not Found</div>
    )
  }
}

export default PageNotFound
