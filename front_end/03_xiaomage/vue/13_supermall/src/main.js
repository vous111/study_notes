import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue() // Vue实例可以作为事件总线


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