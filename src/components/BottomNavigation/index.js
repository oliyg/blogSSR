import React from 'react'
import style from './style.styl'
import { NavLink } from 'react-router-dom'

const arr = [{ name: '主页', path: '/' }, { name: '登录', path: '/login' }, { name: '撰写', path: '/write' }, { name: '关于', path: '/about' }]

const Header = () => (
  <div className={style.container}>
    {
      arr.map((item, index) => <NavLink key={index} exact activeClassName={style.active_item} to={item.path}>{item.name}</NavLink>)
    }
  </div>
)

export default Header
