const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[chunkhash].bundle.js'    
    },
    entry: {
        'main': './src/main.ts'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /spec/,
                loader: 'awesome-typescript-loader',
                query: {
                    useForkChecker: true
                }
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                    { 
                        enforce: "pre", 
                        test: /\.js$/,
                        loader: "source-map-loader" 
                    }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [ path.resolve('node_modules'), path.resolve('src') ]
    },
    devtool: 'source-map'
};