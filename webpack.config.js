// let HtmlWebpackPlugin = require('html-webpack-plugin');
// let CleanWebpackPlugin = require('clean-webpack-plugin');
let myplugin = require('./src/myplugin');
let Webpack = require('webpack');
let path = require('path');
module.exports = {
    entry:{
        app:'./src/index.js'
        // add: './src/mianshi.js'
    },
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.txt/,
            use: [{
                loader: path.resolve('./src/myloader.js'),
                options: {
                    name: 'Alice'
                  }
            }]
        }]
    },
    // devServer: './dist',
    plugins: [
        new myplugin({
            filename: 'xiao'
        })
    ]
        // module: {
    //     rules: [{
    //         test: /\.css/,
    //         use: ['style-loader','css-loader']
    //     },
    //     {
    //         test: /\.(png|svg|jpg|gif)$/,
    //         use: [
    //         'file-loader'
    //         ]
    //         }]
    // },
    // devtool: 'inline-source-map',
    // plugins:[
    //     new CleanWebpackPlugin(['dist']),
    //     new HtmlWebpackPlugin({
    //         filename:'./index.html',
    //         template:'./src/index.html',
    //         title: 'xx'
    //     })
    //     // new Webpack.optimize.CommonsChunkPlugin({
    //     //     name: 'common'
    //     // })
    //  ],
    // devServer:{},
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 0,
    //         cacheGroups: {
    //             vendors: {
    //             name: 'vendors',
    //               test: /[\/]node_modules[\/]/,
    //               priority: -10
    //             },
                
    //             default: {
    //             name: 'default',
    //               minChunks: 2,
    //               priority: -20,
    //               reuseExistingChunk: true
    //             },
    //             // manifist: {

    //             // }
    //           }
    //     }
    // }

    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 name: 'commons',
    //                 chunks: 'initial',
    //                 minChunks: 2
    //             }
    //         }
    //     }
    // },
};