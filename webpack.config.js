const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
};

const PAGES = {
  index: `${PATHS.src}/index.js`,
};

const htmlPlugins = [
  new HtmlWebpackPlugin({
    chunks: ['common', 'index'],
    filename: 'index.html',
    template: `${PATHS.src}/index.pug`,

  }),
];

const PAGES_DIRS = `${PATHS.src}/pages`;
fs.readdirSync(PAGES_DIRS).forEach(
  (item) => {
    const itemPath = `${PATHS.src}/pages/${item}/${item}`;
    Object.defineProperty(PAGES, item, {
      enumerable: true,
      configurable: false,
      writable: false,
      value: `${itemPath}.js`,
    });
    const htmlPlugin = new HtmlWebpackPlugin({
      chunks: ['common', item],
      filename: `${item}.html`,
      template: `${itemPath}.pug`,

    });
    htmlPlugins.push(htmlPlugin);
  },
);

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  return {
    entry: PAGES,

    output: {
      filename: 'scripts/[name].js',
      path: `${PATHS.dist}`,
      publicPath: isProduction ? './' : '/',

    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: '/node_modules/',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    devServer: {
      overlay: true,
      contentBase: 'dist',
      watchContentBase: true,
      liveReload: true,
    },

    // devtool: 'eval',
    devtool: isProduction ? 'none' : 'eval',

    plugins: htmlPlugins.concat([
      new MiniCssExtractPlugin({
        filename: 'styles/[name].css',
      }),
    ]),

    module: {
      rules: [
        {
          test: require.resolve('jquery'),
          loader: 'expose-loader',
          options: {
            exposes: ['$', 'jQuery'],
          },
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],

          },
          exclude: '/node_modules/',
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images',
          },
        },
        {
          test: /\.(ttf|woff|woff2|eot|svg)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: '../' },
            },
            {
              loader: 'css-loader', options: { url: true, import: true },
            },

            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'postcss-preset-env',
                      {
                        // Options
                      },
                    ],
                    [
                      'autoprefixer',
                      {
                        // Options
                      },
                    ],
                    [
                      'cssnano',
                      {
                        // Options
                      },
                    ],
                    [
                      'css-mqpacker',
                      {
                        // Options
                      },
                    ],
                  ],
                },
              },
            },
            { loader: 'resolve-url-loader', options: { removeCR: true } },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },

          ],
        },

        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'postcss-preset-env',
                      {
                        // Options
                      },
                    ],
                    [
                      'autoprefixer',
                      {
                        // Options
                      },
                    ],
                    [
                      'cssnano',
                      {
                        // Options
                      },
                    ],
                    [
                      'css-mqpacker',
                      {
                        // Options
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
        },

      ],
    },
    resolve: {
      alias: {
        '~': PATHS.src,
      },
    },

  };
};
