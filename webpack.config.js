const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,               // type of file to transform
      loader: 'babel-loader',      // what loaders to use
      exclude: /node_modules/,   // don't transform these files
    }, {
      test: /\.css$/,  // target: css files
      use: [
        'style-loader',  // add <style> tag
        'css-loader',    // preprocess 'url()'
      ], // 執行順序由下到上
      exclude: /node_modules/,  // 不要處理 3rd party 的 code
    }],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    }),
  ],
};

