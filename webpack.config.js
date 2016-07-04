module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  watch: true,
  resolve: {
    root: __dirname,

    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
