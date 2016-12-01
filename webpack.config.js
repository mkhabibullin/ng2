module.exports = {
    entry: {
        app: "./app/main.ts"
    },
    output: {
        filename: "./dest/[name].js"
    },
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
			  loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
			}
        ]
    },
    resolve: {
        extensions: ["", ".js", ".ts"]
    }
}