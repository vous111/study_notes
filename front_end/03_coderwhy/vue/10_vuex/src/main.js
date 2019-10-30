import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 需要挂载插件！！！
import store from './store/index';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
