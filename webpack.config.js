var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: "./app/main.ts"
    },
    output: {
        filename: "./dest/[name].js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!resolve-url-loader!sass-loader")
            }
			//{
			//  test: /\.scss$/,
			// exclude: /node_modules/,
			//  loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
			//}
        ]
    },
    resolve: {
        extensions: ["", ".js", ".ts", ".css", ".scss"]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("./dest/[name].css")
    ]
}