var path = require('path');
var webpack = require('webpack');


module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
            //'./script1.js',
            //'./script2.js',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main.js'
        ]
    },
    output:{
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                loader: 'style!css!sass'
            },
            /** Bootstrap font loader **/
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: 'file'
            }
        ]
    }
};