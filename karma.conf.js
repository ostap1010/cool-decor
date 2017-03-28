// Karma configuration
// Generated on Sun Mar 26 2017 01:28:31 GMT+0100 (CET)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            { pattern: './tests.entry.js', watched: false }
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './tests.entry.js': ['webpack', 'sourcemap']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Electron'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        webpack: {
            devtool: 'inline-source-map',
            //entry: './tests.entry.js',
            resolve: {
                extensions: ['.ts', '.js'],
                modules: ['node_modules', 'src']
            },
            module: {
                rules: [
                    {
                        test: /\.ts$/,
                        loader: 'awesome-typescript-loader',
                        query: {
                            useForkChecker: true
                        }
                    },
                    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                    {
                        enforce: 'pre',
                        test: /\.js$/,
                        loader: 'source-map-loader'
                    }
                ]
            }
        },

        webpackServer: { noInfo: true, stats: 'errors-only' },

        mime: {
            'text/x-typescript': ['ts', 'tsx']
        }

    })
}
