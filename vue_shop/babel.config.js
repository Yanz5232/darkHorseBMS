/* 这是项目发布阶段需要用到的babel插件 */
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
    prodPlugins.push('transform-remove-console')
}
module.exports = {
    "presets": [
        "@vue/cli-plugin-babel/preset"
    ],
    "plugins": [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ],
        ...prodPlugins, /* 打包项目时自动删除log打印语句的包的配置 */
        '@babel/plugin-syntax-dynamic-import', /* 路由懒加载配置项 */
    ]
}