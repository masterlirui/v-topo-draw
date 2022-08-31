module.exports = {
    productionSourceMap: process.env.NODE_ENV === 'development',
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'development') {
            config.externals = {
                "@antv/x6": "@antv/x6",
                "core-js": "core-js",
                "element-ui": "element-ui",
                "vue": "vue"
            }
        }

    },
    chainWebpack: config => {
        config.module.rule("js").include.add('/packages').end().use("babel").loader("babel-loader").tap(options => {
            return options
        })
    },
    css: { extract: false }
}
