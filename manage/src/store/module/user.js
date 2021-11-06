import {
    updateStorage
} from '@/utils'
import request from '@/utils/request'

let userInfo = localStorage.getItem('userInfo')
try {
    userInfo = JSON.parse(userInfo) || {}
} catch (err) {
    userInfo = {}
}

export default {
    // 启用命名空间
    namespaced: true,
    state: {
        userInfo,
    },
    getters: {
        isLogin(state) {
            return !!state.userInfo.authorization
        }
    },
    mutations: {
        login(state, payload) {
            state.userInfo = payload
            updateStorage('userInfo', payload)
        },
        logout(state) {
            state.userInfo = {}
            localStorage.removeItem('userInfo')
        }
    },
    actions: {
        async login(context, payload) {
            const {
                data
            } = await request.post('/login', payload)
            if (data.code === 200) {
                context.commit('login', data.data)
                context.commit('addAuthRouter', null, {
                    root: true
                })
            }
            return data;
        }
    }
}