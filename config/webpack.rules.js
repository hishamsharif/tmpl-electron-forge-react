module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(j|t)sx?$/,
    loader: "babel-loader",
    exclude:
        process.env.NODE_ENV === "development" ? /(node_modules|\.webpack)/ : undefined,
    options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript"
        ],
        cacheDirectory: true,
    },
},
];
