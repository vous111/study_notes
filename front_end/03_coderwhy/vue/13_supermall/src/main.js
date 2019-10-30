import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import VueLazyLoad from 'vue-lazyload';

import toast from 'components/common/toast'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue() // Vue实例可以作为事件总线

// 安装toast插件
Vue.use(toast)

// 使用fastclick解决移动端300ms延迟
// FastClick.attach(document.body)

// 使用图片懒加载
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.png')
})
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