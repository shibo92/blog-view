// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入配置对象
import HttpConfig from './router/httpRoute.js'


Vue.prototype.$http = axios
Vue.prototype.$httpConfig = HttpConfig
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.get32UUID = function () {
    function S4() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
  }

/* eslint-disable no-new */
var Vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
export const vm = Vm

