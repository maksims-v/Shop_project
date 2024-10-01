import { buildWebpackConfig } from './config/buildWebpackConfig';
import webpack from 'webpack';
import path from 'path';
import { BuildEnv, BuildPaths } from './config/types/config';

export default (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3001;
  const apiUrl = env.apiUrl || 'http://127.0.0.1:1337';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  });

  return config;
};
