const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const name= "Cards";
const PATHS = {
	relPathDist: `dist/${name}`,
	relPathSrc: `src/pug/pages/${name}`,
	src: path.join(__dirname, `../src/pug/pages/${name}`),
	dist: path.join(__dirname,  `../dist/${name}`),
	assets: 'assets/'
  }

let conf = {


	entry: {
		main: `./${PATHS.relPathSrc}/${name}.js`,
		// module: `${PATHS.src}/your-module.js`,
	},
	output: {
		filename: `[name].js`,
		path: PATHS.dist,
		publicPath: `./`
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
	devServer: {
		overlay: true,
    	openPage: `dist/${name}/${name}.html`
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css',
		}),
		new HtmlWebpackPlugin({
			template: `${PATHS.relPathSrc}/${name}.pug`,
			filename: `./${name}.html`,
			//inject: false
		}),
    ],
	module:{
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
				
				},
				exclude: '/node_modules/'
			},	
			{	
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: `../assets/images`,
				}
			},	
			{
				test:/\.s[ac]ss$/i,
				use: [
					 MiniCssExtractPlugin.loader,
					
					{
						loader: 'css-loader', options: {url: false, import: true}
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
					{ loader: 'resolve-url-loader'},
					'sass-loader',
				]
			},

            {
                test: /\.css$/,
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
      '~': PATHS.src,
		}
	},
	
};
module.exports = (env, options) => {
	return conf;
}