let path = require('path');

module.exports = {
	devtool: false,
	entry: {
		'ninelines-ua-parser': './src/ninelines-ua-parser.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: [
			'ninelines',
			'UAParser',
		],
		libraryTarget: 'umd',
		libraryExport: 'default',

	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
						],
					}
				},
			},
		],
	},
};
