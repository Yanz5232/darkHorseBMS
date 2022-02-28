import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
/* 导入富文本编辑器 */
import VueQuillEditor from 'vue-quill-editor'

//导入全局样式
import './assets/css/global.css'
import './assets/css/font_2873284_ir3xi7r3pj/iconfont.css'

import treeTable from 'vue-table-with-tree-grid'
/* 网页进度条包和css*/
import NProgress from 'nprogress'


Vue.use(treeTable)
Vue.component('tree-table', treeTable)
Vue.config.productionTip = false

/* 将富文本编辑器注册为全局可用的组件 */
Vue.use(VueQuillEditor)

/* axios请求拦截request */
axios.interceptors.request.use(config => {
    /* 开始响应展示进度条 */
    NProgress.start()
    config.headers.Authorization = window.sessionStorage.getItem('token')
        //必须把config return出去
    return config
})

/* axios 回调拦截request */
axios.interceptors.response.use(config => {
    /* 结束响应影藏进度条 */
    NProgress.done()
    return config
})

/* 过滤器 */
Vue.filter('dateFormat', function(time) {
    const dt = new Date(time)
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')

    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`

})
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')