const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
  new HTMLWebpackPlugin({
    template: './src/index.html',
  }),
];

const devServer = {
  port: 8080,
  watchFiles: ['src/*.html'],
  historyApiFallback: true,
  static: path.resolve(__dirname, './dist'),
  hot: true,
};

module.exports = {
  mode: 'development',
  entry: ['./src/index.tsx'],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'public'),
    },
  },
  devtool: "source-map",
  devServer,
  plugins,
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        oneOf: [
          {
            test: /\.module\.(s[ac]|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[local]__[hash:base64:5]',
                  },
                },
              },
              'postcss-loader',
              'sass-loader',
            ],
          },
          {
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.m?tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.m?ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },
      { test: /\.(html)$/, use: ['html-loader'] },
    ],
  },
};
