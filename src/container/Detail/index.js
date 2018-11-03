import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBlogDetail } from './store/actions'
import DetailCard from '../../components/DetailCard'

class Detail extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      currentId: Number(this.props.match.params.id)
    }
  }
  componentDidMount () {
    console.log(this.state.currentId === this.props.blogDetail.id)
    if (this.state.currentId !== this.props.blogDetail.id) {
      this.props.getBlogDetail(this.state.currentId)
    }
  }
  render () {
    return (
      <div>
        <DetailCard detailData={this.props.blogDetail} />
      </div>
    )
  }
}

const mapState = state => ({
  blogDetail: state.detail.blogDetail
})
const mapDispatch = dispatch => ({
  getBlogDetail (id) {
    dispatch(getBlogDetail(id))
  }
})

const WrapperDetail = connect(mapState, mapDispatch)(Detail)
WrapperDetail.loadData = (store, req) => {
  // 根据路由 id 获取文章详情
  let matchedId = req.path.match(/detail\/(\d+)/)
  matchedId = matchedId ? Number(matchedId[1]) : null
  return store.dispatch(getBlogDetail(matchedId))
}

export default WrapperDetail
