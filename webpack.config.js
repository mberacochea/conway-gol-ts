const path = require('path');
const TypedocWebpackPlugin = require('typedoc-webpack-plugin');

module.exports = {
    entry: './src/game.ts',
    output: {
        filename: './www/js/app.bundle.js',
        libraryTarget: 'window',
        library: 'ConwayGoL'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: "source-map",
    target: "web",
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'www'),
        port: 8000
    },
    plugins: [
        new TypedocWebpackPlugin({
            module: "commonjs",
            target: "es5",
            out: "docs/project/",
            name: "My project title"
        })
    ],
};