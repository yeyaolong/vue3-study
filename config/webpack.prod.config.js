const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin =  require('copy-webpack-plugin');


module.exports = merge(baseConfig, {
    mode: "production",
    devtool: "source-map", // enum  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试    
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: '../public/index.html'    // 因为context设定为__dirname 也即 当前webpack.config所在目录，所以，这里用 ../ 相对路径
        }),
        new CopyPlugin({    // CopyPlugin 将from目录下的内容拷贝到 to 目录下面
            patterns: [
                { from: '../public', to: '../dist' }
            ],
        }),
    ],
})