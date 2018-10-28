const path = require('path')

module.exports = {
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.css', '.styl']
      },
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
