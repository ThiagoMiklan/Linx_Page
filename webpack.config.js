const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader'
         }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
   ]
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}