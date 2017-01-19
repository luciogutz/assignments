module.exports = {
  entry: "./js/index.js",
  devtools: "source-map",
  output: {
      path: "./dist",
      filename: "bundle.js"
  },
module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }
      ]
    }
}
