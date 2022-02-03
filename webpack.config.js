let path = require('path');

module.exports = {
	devtool: false,
	entry: {
		'ninelines-ua-parser': './src/ninelines-ua-parser.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: {
			name: 'NinelinesUAParser',
			type: 'umd',
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
};
