import Vue from 'vue'
import Router from 'vue-router'
  
const Dashboard1 = () => import('../views/Dashboard1.vue')
const Dashboard2 = () => import('../views/Dashboard2.vue')
const Dashboard3 = () => import('../views/Dashboard3.vue')
const ComingSoon = () => import('../views/ComingSoon.vue')
Vue.use(Router)


export default new Router({
    mode:'history',
    routes: [{
            path: '/dashboard1',
            name: 'Dashboard1',
            component: Dashboard1,
        },
        {
            path: '/dashboard2',
            name: 'Dashboard2',
            component: Dashboard2,
        },
        {
            path: '/dashboard3',
            name: 'Dashboard3',
            component: Dashboard3,
        },
        {
            path: '/coming-soon',
            name: 'ComingSoon',
            component: ComingSoon,
        }

    ]
})