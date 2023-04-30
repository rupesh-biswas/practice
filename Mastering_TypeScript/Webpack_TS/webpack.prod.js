const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "./"),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsc?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist",
        clean: true
    }
}