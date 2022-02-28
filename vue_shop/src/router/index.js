import Vue from 'vue'
import VueRouter from 'vue-router'
/* import login from '../components/login.vue' */
const login = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/login.vue')

/* import home from '../components/home.vue' */
const home = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/home.vue')

/* import welcome from '../components/welcome.vue' */
const welcome = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/welcome.vue')

/* import users from '../components/user/users.vue' */
const users = () =>
    import ( /* webpackChunkName:"users_rights_roles" */ '../components/user/users.vue')

/* import rights from '../components/power/rights.vue' */
const rights = () =>
    import ( /* webpackChunkName:"users_rights_roles" */ '../components/power/rights.vue')

/* import Roles from '../components/power/Roles.vue' */
const Roles = () =>
    import ( /* webpackChunkName:"users_rights_roles" */ '../components/power/Roles.vue')

/* import Cate from '../components/goods/Cate.vue' */
const Cate = () =>
    import ( /* webpackChunkName:"cate_params" */ '../components/goods/Cate.vue')

/* import params from '../components/goods/params.vue' */
const params = () =>
    import ( /* webpackChunkName:"cate_params" */ '../components/goods/params.vue')

/* import List from '../components/goods/List.vue' */
const List = () =>
    import ( /* webpackChunkName:"list_addgood" */ '../components/goods/List.vue')

/* import addgood from '../components/goods/addgood.vue' */
const addgood = () =>
    import ( /* webpackChunkName:"list_addgood" */ '../components/goods/addgood.vue')

/* import order from '../components/order/order.vue' */
const order = () =>
    import ( /* webpackChunkName:"report_order" */ '../components/order/order.vue')

/* import report from '../components/report/report.vue' */
const report = () =>
    import ( /* webpackChunkName:"report_order" */ '../components/report/report.vue')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
}, {
    path: '/login',
    component: login
}, {
    path: '/home',
    component: home,
    redirect: '/home/welcome',
    children: [{
        path: 'welcome',
        component: welcome,
    }, {
        path: 'users',
        component: users,
    }, {
        path: 'rights',
        component: rights,
    }, {
        path: 'Roles',
        component: Roles,
    }, {
        path: 'categories',
        component: Cate,
    }, {
        path: 'params',
        component: params,
    }, {
        path: 'goods',
        component: List,
    }, {
        path: 'goods/add',
        component: addgood,
    }, {
        path: 'orders',
        component: order,
    }, {
        path: 'reports',
        component: report,
    }]
}, ]



const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

//路由前置守卫
router.beforeEach((to, form, next) => {
    if (to.path == '/login') {
        next()
    } else {
        var token = window.sessionStorage.getItem('token')
        if (token) {
            next()
        } else {
            next('/login')
        }
    }
})

export default router