const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/ts/app.ts'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'dist/',
    inline: true,
    hot: true,
    watchContentBase: true,
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('dist/js'),
    publicPath: '/assets'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
