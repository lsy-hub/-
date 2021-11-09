import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import request from './utils/request'
import router from './router'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'
<<<<<<< HEAD
import VueRouter from 'vue-router'
import denglu from './utils/denglu'
// import suju from './utils/suju'
=======
>>>>>>> 0ebb160dc5e14af39431a32918ded89cac39b9c1


Vue.use(Vant);

<<<<<<< HEAD
Vue.prototype.$denglu = denglu
Vue.prototype.$request = request
// Vue.prototype.$suju = suju
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(router)
Vue.use(Vuex)


=======
Vue.prototype.$request = request;
Vue.config.productionTip = false

//图片自动滚动
>>>>>>> 0ebb160dc5e14af39431a32918ded89cac39b9c1
import { Lazyload } from 'vant';
Vue.use(Lazyload);


Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
   router,
  render: h => h(App),
}).$mount('#app')



import Router from 'vue-router'


const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}