const debug = true;//process.env.NODE_ENV !== "production";
const webpack = require( "webpack" );
const path = require( "path" );

module.exports = {
//	target: "node",
	node: {
		fs: "empty",
//		process: false,
	},
	context: path.resolve( __dirname, "src" ),
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./js/client.js",
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				query: {
					presets: [ "react", "es2015", "stage-0" ],
					plugins: [ "react-html-attrs", "transform-class-properties", "transform-decorators-legacy" ],
				},
			},
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "less-loader" },
				],
			},
		],
	},
	output: {
		path: path.resolve( __dirname, "build" ),
		filename: "bundle.js",
	},
	devServer: {
		contentBase: path.resolve( __dirname, "build" ),
		historyApiFallback: true,
		host: "localhost",
		port: 3000,
		proxy: {
			"/api/**": {
				target: "http://localhost:3000/api/",
				secure: false,
			},
		},
	},
};