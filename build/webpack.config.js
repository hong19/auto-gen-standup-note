var path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  target: 'node',
  context: path.resolve(__dirname, '../'),
  entry: './src/app.js',
  output: {
    path: resolve('dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['src', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  },
  stats: {
    colors: true
  },
  optimization: {
    minimize: false
  },
  mode: 'development',
  devtool: 'source-map'
};