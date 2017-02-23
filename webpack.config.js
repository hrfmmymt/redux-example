const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    publicPath: "/",
    path: path.resolve('public'),
    filename: "bundle.js",
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js'],
  },
  module: {
    loaders:[
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
}