const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')

module.exports = merge(base, {
  mode: 'development',
  entry: path.resolve(__dirname, './src/client/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }
})
