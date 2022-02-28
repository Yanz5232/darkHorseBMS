module.exports = {
    chainWebpack: config => {
        /* 打包阶段打包的入口文件 */
        config.when(process.env.NODE_ENV === 'production', config => {
            config.entry('app').clear().add('./src/main-prod.js')

            /* 打包模式减少项目体积 */
            config.set('externals', {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                axios: 'axios',
                lodash: '_',
                echarts: 'echarts',
                nprogress: 'NProgress',
                'vue-quill-editor': 'VueQuillEditor'
            })

            /* 子定制首页内容 */
            config.plugin('html').tap(args => {
                args[0].isProd = true
                return args
            })
        })

        /* 运行阶段打包的入口文件 */
        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main-dev.js')
                /* 子定制首页内容 */
            config.plugin('html').tap(args => {
                args[0].isProd = false
                return args
            })
        })
    }
}