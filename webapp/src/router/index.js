import Vue from 'vue';
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import Login from '../views/login.vue'
Vue.use(VueRouter);


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/home',
            component: Home,
            name: 'Home',
            props:true,
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path:'/login',
            component:Login,
            name: 'Login'
        }
    ]
})

export default router;