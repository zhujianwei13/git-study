
var path=require("path");

var config={
    entry:{
        index:"./src/index.js"
    },

    output: {
        filename: '[Name].bundle.js',
        path: path.resolve(__dirname,"./dist")
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



}


module.exports=config