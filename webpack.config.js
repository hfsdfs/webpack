module.exports = {    
    entry: './src/app.js',    
    output: {    
        path: __dirname,    
        filename: './bin/app.bundle.js',    
    },    
    module: {    
        loaders: [{    
            test: /\.js$/,    
            exclude: /node_modules/,    
            loader: 'babel-loader'    
        }]    
    }
}
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/appp.js',
  output: {
    path: __dirname + '/dist',
    filename: 'appp.bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
    },
    hash: true,
  })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
};