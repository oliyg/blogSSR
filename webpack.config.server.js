const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')

module.exports = merge(base, {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, './src/server/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
})
