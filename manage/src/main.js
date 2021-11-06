import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import request from './utils/request'
import requestNew from './utils/requestNew'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.prototype.$request = request
Vue.prototype.$requestNew = requestNew


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const path = to.path
  if (path.startsWith('/manage')) {
    if (store.getters['user/isLogin']) {
      const {
        username,
      } = store.state.user.userInfo
      request.get('/user/verfiy', {
        params: {
          username
        }
      }).then(({
        data
      }) => {
        if (data.code === 400) {
          store.commit('/user/logout')
          router.push('/login')
        }
      })
      next()
    } else {
      router.push('/login')
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')