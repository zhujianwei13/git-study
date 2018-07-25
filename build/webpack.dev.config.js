
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const common=require('./webpack.common.config.js');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');   //自动生成html
const CleanWebpackPlugin = require('clean-webpack-plugin');  //清理旧的  目录中文件
const ManifestPlugin = require('webpack-manifest-plugin');   //提取数据
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports=merge(common,{
    mode:development,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:"朱建伟"
        }),
        new ManifestPlugin(),
        new UglifyJSPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
                 name: 'common' // 指定公共 bundle 的名称。
    }),
        new ExtractTextPlugin("styles.css")
    ],

})







