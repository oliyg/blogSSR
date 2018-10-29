const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.css', '.styl']
  },
  module: {
    rules: [{
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    },
    {
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['react', 'stage-0', ['env', {
          targets: {
            browsers: ['last 2 versions']
          }
        }]]
      }
    }]
  }
}
