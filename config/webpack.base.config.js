const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin =  require('copy-webpack-plugin');

module.exports = {
    // mode: "production", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.

    entry: "../src/main.js", // string | object | array  // 这里应用程序开始执行
    // webpack 开始打包

    output: {
        // webpack 如何输出结果的相关选项

        path: path.resolve(__dirname, "../dist"), // string dirname指向当前webpack.config所在路径
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）

        filename: "bundle.js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）

        publicPath: "./", // string    // 输出解析文件的目录，url 相对于 HTML 页面
    },

    module: {
        // 关于模块配置
        rules: [],
    },

    resolve: {},

    devtool: "source-map", // enum  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
    // 牺牲了构建速度的 `source-map' 是最详细的。

    context: __dirname, // string（绝对路径！）
    // webpack 的主目录
    // entry 和 module.rules.loader 选项
    // 相对于此目录解析

    

    devServer: {
        // proxy: { // proxy URLs to backend development server
        //   '/api': 'http://localhost:3000'
        // },
        // contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
        // compress: true, // enable gzip compression
        // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        // https: false, // true for self-signed, object for cert authority
        // noInfo: true, // only errors & warns on hot reload
    },

    // plugins: [
    //     new CleanWebpackPlugin(),
    //     new HtmlWebpackPlugin({
    //         title: 'Development',
    //         template: '../public/index.html'    // 因为context设定为__dirname 也即 当前webpack.config所在目录，所以，这里用 ../ 相对路径
    //     }),
    //     new CopyPlugin({    // CopyPlugin 将from目录下的内容拷贝到 to 目录下面
    //         patterns: [
    //             { from: '../public', to: '../dist' }
    //         ],
    //     }),
    // ],
    // 附加插件列表

 

}