import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/home',
            component: Home,
            name: 'Home',
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

export default router;