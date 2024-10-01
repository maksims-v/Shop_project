import webpack from 'webpack';
import { BuildOptions } from './types/config';
import buildCssLoader from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoaders = buildCssLoader(isDev);

  const babelLoader = {
    test: /\.(js|jsx||tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, babelLoader, typeScriptLoader, cssLoaders];
}
