import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// 防止报错 Uncaught (in promise) 
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}