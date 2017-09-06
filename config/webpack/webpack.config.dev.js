const path = require('path');

module.exports = {
  entry: {
    app: './src/js/app.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'dist/',
    watchContentBase: true,
    host: '0.0.0.0'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('dist/js'),
    publicPath: '/js'
  }
};
