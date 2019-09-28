import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/Profile.vue')
const Shopcart = () => import('views/shopcart/Shopcart.vue')

// 1.安装插件
Vue.use(Router)

// 2.创建路由对象
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
