const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path');

function srcPaths(src) {
  return path.join(__dirname, src);
}


rules.push({
  test: /\.s[ac]ss$/i,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' },{ loader: 'sass-loader' }],
});



module.exports = {
  //entry: ['react-hot-loader/patch'],
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    alias: {
      '@web': srcPaths('src/web'),
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css','.scss']
  },
};
