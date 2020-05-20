const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const path = require('path');

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "source-map", // enum  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
    devServer: {
        proxy: { // proxy URLs to backend development server
        //   '/api': 'http://localhost:3000'
        },
        // port: 8080,
        contentBase: path.join(__dirname, '../dist'), // boolean | string | array, static file location
        // compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        // noInfo: true, // only errors & warns on hot reload
    }
})