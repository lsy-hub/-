import Vue from 'vue'
import App from './App.vue'
import router from './router'
import request from './utils/request'
import Vant from 'vant'
import Vuex from 'vuex'
import 'vant/lib/index.css'
import VueRouter from 'vue-router'
import denglu from './utils/denglu'
// import suju from './utils/suju'


import 'vant/lib/index.css';

Vue.use(Vant);

Vue.prototype.$denglu = denglu
Vue.prototype.$request = request
// Vue.prototype.$suju = suju
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

// liaousyang 11.5更新代码 上面也有更新代码 但是全部都是添加
import Router from 'vue-router'


const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}