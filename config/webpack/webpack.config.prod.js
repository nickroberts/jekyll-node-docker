const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: './src/ts/app.ts'
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
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: 'config/postcss/postcss.config.js'
                }
              }
            },
            { loader: 'sass-loader' }
          ]
        })
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('dist/assets')
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].bundle.css', allChunks: true }),
    new UglifyJSPlugin()
  ]
};
