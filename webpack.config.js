const path = require('path');
const config = require('config');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    alias: {
      config: path.join(__dirname, 'config', process.env.NODE_ENV)
    },
    extensions: ['', '.js', '.jsx']
  },
  node: {
    fs: 'empty'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
