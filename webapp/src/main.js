import Vue from 'vue'
import App from './App.vue'
import router from './router'
import request from './utils/request'

import Vuex from 'vuex'


Vue.prototype.$request = request
Vue.config.productionTip = false

// Vue.use(router)
Vue.use(Vuex)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')