/**
 * Webpack configuration to build the project
 */

'use strict';

const webpack     = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { version } = require('./package.json');

module.exports = env => {
  const addPlugin = (add, plugin) => add ? plugin : undefined;
  const removeEmpty = plugins => plugins.filter(plugin => !!plugin);
  const ifProd = plugin => addPlugin(env.prod, plugin);

  const output = {
    path: resolve(process.cwd(), 'dist'),
    filename: '[name].js',
    publicPath: ifProd ? 'https://whois.fullcrack.dev/' : 'http://localhost:9000/',
  };

  return {
    entry: './index.tsx',
    output,
    context: resolve(__dirname),
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json']
    },
    plugins: removeEmpty([
      new CopyWebpackPlugin([{ from: './public' }]),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: env.prod ? '"production"' : '"development"',
          version: `'${version}'`,
        },
      }),
      new HtmlWebpackPlugin({
        template: 'index.html',
        version,
      }),
      ifProd(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })),
    ]),
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        compress: true,
        port: 9000
      },
    module: {
        rules: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          {test: /\.tsx?$/, use: ['babel-loader', 'ts-loader']},
          {test: /\.css?$/, use: ['style-loader', 'css-loader']},
        ]
    }
  };
}
