
const path = require('path');

function srcPaths(src) {
  return path.join(__dirname, src);
}

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/app/main.ts',
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    alias: {
      '@app': srcPaths('src/app'),
      "@core": srcPaths('src/app/core')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json']
  },
};