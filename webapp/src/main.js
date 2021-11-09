import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import request from './utils/request'
import router from './router'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'
import denglu from './utils/denglu'

Vue.use(Vant);

Vue.prototype.$denglu = denglu
Vue.prototype.$request = request
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(router)
Vue.use(Vuex)

import { Lazyload } from 'vant';
Vue.use(Lazyload);

new Vue({
   router,
  render: h => h(App),
}).$mount('#app')



import Router from 'vue-router'


const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}