import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins({
  paths,
  isDev,
  apiUrl,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new ReactRefreshWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.DefinePlugin({
      __API__: JSON.stringify(apiUrl),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
}
