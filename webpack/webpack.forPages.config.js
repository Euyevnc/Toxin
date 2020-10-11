const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

// Pages const for HtmlWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
// const PAGES_DIR = PATHS.src
const PAGES_DIRS = `${PATHS.src}/pug/pages/`

const PAGES = [];

fs.readdirSync(PAGES_DIRS).forEach( 
	(item) => {fs.readdirSync(`${PAGES_DIRS}/${item}/`).forEach( (item) => {if (item.endsWith('.pug')){PAGES.push(item)}
})
});


module.exports = {
  // BASE config
	externals: {
    paths: PATHS
	},
	entry: {
		app: PATHS.src,
		// module: `${PATHS.src}/your-module.js`,
	},
	output: {
		filename: `./[name].js`,
		path: path.resolve(__dirname, '../dist'),
		publicPath: '../dist'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true
				}	
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
				
				},
				exclude: '/node_modules/'
			},{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
			}
			},{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					name: 'assets/images/[name].[ext]'
				},
			},{
				test:/^((?!\.module).)*s[ac]ss$/i,
				use: [
					process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
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
									]									
								],
							},
						},
					},
						'sass-loader',
					]
			},
			{
                test: /\.module\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
					{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
							modules: {
                                localIdentName: '[local]__[sha1:hash:hex:7]'
                            }
                        }
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
									]									
								],
							},
						},
					},
					'sass-loader',
                ]
            },
			{
                test: /\.module\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[local]__[sha1:hash:hex:7]'
                            }
                        }
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
									]									
								],
							},
						},
					},
                ]
            },
            {
                test: /^((?!\.module).)*css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        }
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
									]									
								],
							},
						},
				},
                ]
            },
			{
			test: /\.pug$/,
			loader: 'pug-loader'
			}, 
		]
	},
	resolve: {
		alias: {
      '		~': PATHS.src,
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `[name]/[name].css`,
		}),
		/*new CopyWebpackPlugin({
			patterns:[
				//{ from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
				{ from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
				{ from: `${PATHS.src}/static`, to: '' },
			]	
		}),*/

    // Automatic creation any html pages (Don't forget to RERUN dev server)
    // see more: https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
    // best way to create pages: https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIRS}/${page.replace(/\.pug/,'')}/${page}`,
	  filename: `./${page.replace(/\.pug/,'')}/${page.replace(/\.pug/,'.html')}`,
	  inject: false
    })),
  ],
}