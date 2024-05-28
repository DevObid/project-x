const path = require('path');

module.exports = {
    // إعدادات الإدخال والإخراج
    entry: './src/index.js', // نقطة الدخول لتطبيق React
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "querystring": require.resolve("querystring-es3"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "url": require.resolve("url/"),
            "buffer": require.resolve("buffer/"),
            "path": require.resolve("path-browserify"),
            "fs": false, // or provide your own implementation if needed
            "crypto": require.resolve("crypto-browserify"),
            "process": require.resolve("process/browser")

            // Add other missing modules here
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }


};
