import React from 'react'
import style from './style.styl'

const info = {
  name: 'OliverYoung',
  github: 'https://github.com/oliyg',
  mail: 'billyangg@qq.com',
  desc: '该 webApp 基于 React 服务端渲染，NodeJS 为中间层。API 则使用 hapi 开发。前端代码见 github：https://github.com/oliyg/blogSSR ；后台系统 DEMO 请查看项目网址 https://hapiblog.oliyg.com/documentation ；后台系统代码见 github：https://github.com/oliyg/hapiblog'
}

const About = () => (
  <div className={style.container}>
    <div>{info.name}</div>
    <div>{info.github}</div>
    <div>{info.mail}</div>
    <div>{info.desc}</div>
  </div>
)

export default About
