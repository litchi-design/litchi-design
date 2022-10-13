// karma.conf.js
const webpackConfig = require('./build/webpack.test');

module.exports = function(config) {
    const configuration = {
        frameworks: ['mocha', 'chai', 'webpack'], // 此处的配置，将框架全局变量声明为全局

        files: ['test/**/*.spec.js'],

        preprocessors: {
            // 预处理器
            'test/**/*.spec.js': ['webpack', 'sourcemap'], // webpack预编译处理;sourcemap映射到源码
        },

        webpack: webpackConfig,

        reporters: ['spec'],

        browsers: ['ChromeHeadless'], // 填入本地存在的正确的浏览器名称，karma会自动打开。
    };

    config.set(configuration);
};
