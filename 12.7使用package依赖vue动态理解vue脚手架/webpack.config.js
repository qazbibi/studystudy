const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'
const config = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'bundle1.js'
  },
  target: 'web',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new HTMLPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.vue$/, use: ['vue-loader'] },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/, use: {
          loader: 'url-loader', options: { limit: 1024, name: '[name]-moira.[ext]' }
        }
      }
    ]
  }
}
module.exports = config
if (isDev) {
  // 在config上加一个devServer配置
  config.devServer = {
    // 启动的服务端口
    port: 3000,
    // 通过localhost或IP进行访问
    host: '127.0.0.1',
    // 若编译过程中有错误，显示到网页上,便于定位错误
    overlay: {
      errors: true,
    },
    //热加载
    hot: true
  }
}
