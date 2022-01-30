const path = require("path")
const HtmlWebPackPlugin = require('html-webpack-plugin') 
const MiniCssExtractPlugin  = require("mini-css-extract-plugin")
module.exports ={
    entry : {

        app : [
            '/src/js/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: `app.bundle.js`
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: `./src/index.html`,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/app.bundle.css'
        }),
        
    ],
    devServer:{
        disableHostCheck: true,
        port: 3500
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [{
                    loader: "file-loader",
                    options:{
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        useRelativePath: true
                    }
                }]
              },
        ]
    }
}