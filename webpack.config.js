// ESモジュールのインポート構文
import path from 'path';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import sass from 'sass';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// export defaultを利用した設定のエクスポート
export default {
  entry: './src/scripts/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
              sourceMap: true
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|eot|wof|woff|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '.src/assets/images/[name].[ext]'
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  devtool: "source-map",
  watchOptions: {
    ignored: /node_modules/
  },
};
