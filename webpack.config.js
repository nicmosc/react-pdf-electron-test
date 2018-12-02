const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');


dotenv.config();


const rootDirs = [
  path.resolve(__dirname, 'src'),
];


module.exports = {
  entry: [
    './src/app/index.jsx',
  ],
  target: 'electron-renderer',
  mode: process.env.APP_ENV,
  devtool: 'source-map',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    globalObject: 'this',
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
    alias: {
      '~': path.resolve(__dirname, 'src/app'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: rootDirs,
        use: [{
          loader: 'babel-loader',
        }],
      },{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }, {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
};
