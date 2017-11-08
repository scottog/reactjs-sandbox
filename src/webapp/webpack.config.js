var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader?name=images/[name].[ext]' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader?name=fonts/[name].[ext]' },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [ new HtmlWebpackPlugin({
    template: './index.html'
  })]
}