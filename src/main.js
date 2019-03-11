// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//入口文件
import Vue from 'vue'
import App from './App'
import './mock/mockServer'
//注册路由器
import router from './router'
import 'lib-flexible/flexible'

import store from './store'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
