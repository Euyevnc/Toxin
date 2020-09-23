let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');


let conf = {
	entry: './src/index.js',
	output: { 
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	
	},
	devServer: {
		overlay: true,
		//proxy
	},
	plugins: [
        new MiniCssExtractPlugin({
            filename: `assets/[name].[hash].css`,

        }),
    ],
	module:{
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},	
			{	
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
					//outputPath: '[path]',
				}
			},	
			{
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
            }
		
		]
	}
	
};
module.exports = (env, options) => {
	let production = options.mode === 'production';
	console.log(options);
	conf.devtool = production 
					? false
					: 'eval-sourcemap';
		
	return conf;
}