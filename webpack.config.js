var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
     entry: './src/index.js',
     output: {
         path: './dist',
         filename: 'app.bundle.js'
     },
     module: {
        loaders: [
            
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel-loader'
        }
    },
    babel: {
        presets: ['es2015']
    },
    plugins: [

        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        })
    ]
 };