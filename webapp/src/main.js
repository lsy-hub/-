import Vue from 'vue'
import App from './App.vue'
import router from './router'
import request from './utils/request'
import Vant from 'vant'
import Vuex from 'vuex'
import 'vant/lib/index.css'
import VueRouter from 'vue-router'


Vue.use(Vant);

Vue.prototype.$request = request
Vue.config.productionTip = false

//图片自动滚动
import { Lazyload } from 'vant';
Vue.use(Lazyload);


// Vue.use(router)

Vue.use(VueRouter)
Vue.use(Vuex)

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