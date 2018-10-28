const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')

module.exports = (env, argv) => {
  const { mode } = argv
  return merge(base, {
    mode,
    entry: path.resolve(__dirname, './src/client/index.js'),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'public')
    },
    module: {
      rules: [{
        test: /\.css?$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        }]
      }]
    }
  })
}
