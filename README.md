# 🍭 blogSSR

该项目是 react 服务端渲染的博客 DEMO；意在展示 react 服务端渲染的基本逻辑；前端使用 react server side renderer；后台使用 hapi 提供的 API 接口，并通过 node 作为中间层统一获取 hapi 提供的接口数据；hapi 后台系统通过 sequelize 和 mysql 作为数据持久化，并使用 redis 作为中间缓存；使用 jwt 鉴权 Authorization。

- hapiblog 后台项目地址：https://github.com/oliyg/hapiblog
- blogSSR 前台项目地址：https://github.com/oliyg/blogSSR

## 🍉 使用方法

因该项目仅作为 DEMO 展示，因此需要 clone 仓库并使用如下命令启动开发模式：

```sh
cd blogSSR
npm run dev
# 访问 localhost:3000 即可

# server listening at localhost:3000
# webpack is watching the files…
# webpack is watching the files…
```
