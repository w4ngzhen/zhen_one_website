const { defineConfig } = require('@rspack/cli');
const rspack = require('@rspack/core');
const path = require('path');

const CSS_LOADER = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[local]__[hash:base64:5]',
    },
  },
};

module.exports = defineConfig({
  mode: 'development',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.[j|t]sx?/,
        use: ['babel-loader'],
        exclude: /node_moudles/,
      },
      {
        test: /\.css$/,
        use: [rspack.CssExtractRspackPlugin.loader, CSS_LOADER],
      },
      {
        test: /\.less$/,
        use: [
          rspack.CssExtractRspackPlugin.loader,
          CSS_LOADER,
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      inject: 'body',
    }),
    new rspack.CssExtractRspackPlugin({
      filename: 'style.css',
    }),
  ],
  devServer: {
    port: 8080,
    host: '0.0.0.0',
  },
});
