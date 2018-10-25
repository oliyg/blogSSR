import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBlogList } from './store/actions'

class Home extends Component {
  render () {
    return (
      <div>
        <div onClick={() => { console.log('d') }}>home</div>
        <div>
          {this.getList()}
        </div>
      </div>
    )
  }
  componentDidMount () {
    // 解决重复加载资源问题
    if (!this.props.blogList.length) {
      this.props.getBlogList()
    }
  }
  getList () {
    return this.props.blogList.map(item => {
      return (
        <ul key={item.id}>
          <li>{item.title}</li>
        </ul>
      )
    })
  }
}

const mapState = state => ({
  blogList: state.home.blogList
})
const mapDispatch = dispatch => ({
  getBlogList () {
    dispatch(getBlogList())
  }
})

// 手动挂载 loadData
const WrapperHome = connect(mapState, mapDispatch)(Home)
WrapperHome.loadData = store => {
  return store.dispatch(getBlogList())
}

export default WrapperHome
