
const webpack = require('webpack');

var path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');   //自动生成html

const CleanWebpackPlugin = require('clean-webpack-plugin');  //清理旧的  目录中文件

var ManifestPlugin = require('webpack-manifest-plugin');   //提取数据

var config={
    entry:{
        index:path.resolve(__dirname,"src/index.js")
    },

    output: {
        filename: '[Name].bundle.js',
        path: path.resolve(__dirname,"dist")
    },


    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader', 'css-loader']
        },{
            test:/\.(png|jpg|jpeg|gif)$/,
            use:["file-loader"]
        }]
    },


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
            "@":path.join(__dirname,"src/component")
        }
    },

}


module.exports=config