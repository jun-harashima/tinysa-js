var dist_dir = __dirname + '/dist';

var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: __dirname + "/src/index.js",
    externals: [nodeExternals()],
    target: 'node',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        library: 'tinysa-js',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["@babel/preset-env"],
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        modules: ['src'],
        extensions: ['.js']
    }
};
