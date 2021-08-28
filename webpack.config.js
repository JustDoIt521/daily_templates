const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }= require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js', //  入口文件
    output: {
        path: path.resolve(__dirname, './dist'),  // 打包后文件位置
        filename: 'index.js',  // 打包后文件名称
    },
    module: {},
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html', // 模板的配置文件入口
        }),
        new CleanWebpackPlugin(),  // 清理 dist里面的文件 
    ],
    devServer: {  //  本地服务配置
        port: 3609,  // 端口 
        open: true, // 是否自动打开   设置为true后  运行本地环境则会自动打开浏览器
    }
}