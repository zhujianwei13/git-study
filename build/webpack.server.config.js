




const common=require('./webpack.common.config.js');
const merge = require('webpack-merge');
const webpack = require('webpack');


var path=require("path");


const HtmlWebpackPlugin = require('html-webpack-plugin');   //自动生成html

const CleanWebpackPlugin = require('clean-webpack-plugin');  //清理旧的  目录中文件

var ManifestPlugin = require('webpack-manifest-plugin');   //提取数据



module.exports=merge(common,{
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:"朱建伟"
        }),  new ManifestPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
        alias:{
            "@":path.join(__dirname,"../src/component")
        }
    },

    devtool: 'inline-source-map',  //调试

    devServer:{
        contentBase:"../dist",
        hot: true
    }
})



