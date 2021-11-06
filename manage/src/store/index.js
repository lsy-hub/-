import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import router from '@/router'
import authRouter from '@/router/authRouter'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {
        addAuthRouter() {
            router.addRoute(authRouter)
        }
    },
    actions: {},
    modules: {
        user
    }
})

export default store