import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBlogList } from './store/actions'
import Card from '../../components/Card'
import style from './style.styl'
import LoadMore from '../../components/LoadMore'

class Home extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      currentPage: 1
    }
    this.handleLoadMore = this.handleLoadMore.bind(this)
  }
  render () {
    return (
      <div className={style.wrapper}>
        {this.getList()}
        <LoadMore onClick={this.handleLoadMore} />
      </div>
    )
  }
  componentDidMount () {
    // 解决重复加载资源问题
    if (!this.props.blogList.length) {
      this.props.getBlogList()
    }
  }
  handleLoadMore (d) {
    this.setState({ currentPage: ++this.state.currentPage }, () => {
      this.props.getBlogList(this.state.currentPage)
    })
  }
  getList () {
    return this.props.blogList.map(item => {
      return (
        <Card key={item.id} blogItem={item}></Card>
      )
    })
  }
}

const mapState = state => ({
  blogList: state.home.blogList
})
const mapDispatch = dispatch => ({
  getBlogList (currentPage) {
    dispatch(getBlogList(currentPage))
  }
})

// 手动挂载 loadData
const WrapperHome = connect(mapState, mapDispatch)(Home)
WrapperHome.loadData = store => {
  return store.dispatch(getBlogList())
}

export default WrapperHome
