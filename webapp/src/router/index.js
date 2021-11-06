import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Newslist from '../views/Newslist.vue'
import NewsDetail from '../views/NewsDetail.vue'
import login from '../views/login.vue'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
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
        },
        {
            path: '/Newslist',
            component: Newslist,
            name: 'Newslist'
        }
        ,{
            path: '/NewsDetail',
            component: NewsDetail,
            name: 'NewsDetail',
        },
        {
            path: '/login',
            component: login,
            name: 'login'
        },
    ],
    scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    }
    return {x: 0, y: 0}
}
})

router.beforeEach(function(to,from,next){
    const userInfo=JSON.parse(localStorage.getItem('userInfo'))
    console.log('beforeEach')
    if(['/cart'].includes(to.path)){
        if(userInfo){
            next()
        }else{
            next(
                {
                    path:'/home'
                }
            )
        }
    }else if('/login'===to.path){
        if(!userInfo){
            next(
            )
        }
    }else{
        next()
    }
})


export default router;