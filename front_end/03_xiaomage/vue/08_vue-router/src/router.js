// 配置路由相关的信息
import VueRouter from "vue-router";
import Vue from "vue";

// import Home from './components/Home.vue'
// import About from './components/About.vue'
// import User from './components/User.vue'

// 路由懒加载
const Home = () => import('./components/Home.vue')
const About = () => import('./components/About.vue')
const User = () => import('./components/User.vue')
const Profile = () => import('./components/Profile.vue')
const HomeNews = () => import('./components/HomeNews.vue')
const HomeMessage = () => import('./components/HomeMessage.vue')

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter);

// 2.创建VueRouter对象
const routes = [
  // {
  //   path:'/', // '/'
  //   redirect:'/home', // 重定向
  // },
  {
    path:'/home',
    component: Home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      },
    ],
  },
  {
    path:'/about',
    component: About,
    meta:{
      title:'关于'
    },
    // 路由独享的守卫
    beforeEnter: (to, from, next)=>{
      // console.log('about beforeEnter');
      next();
    }
  },
  {
    path:'/user/:userId',
    component: User,
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    component: Profile,
    meta:{
      title:'档案'
    }
  },
];
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode:'history', // hash模式有#号，history模式没有#号
  // history.pushState({},'','test') 往history中压入test路由
  // history.back() 从history中推出一个路由
  linkActiveClass: 'u-link--Active', // 这是链接激活时的class
});

// 导航守卫：https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB

// 全局导航守卫  
router.beforeEach((to,from,next)=>{
  // 从from跳转到to
  // document.title = to.meta.title;
  // console.log('beforeEach');
  document.title = to.matched[0].meta.title;
  next();
});
router.afterEach((to,from)=>{
  // console.log('afterEach');
})

// 3.将router对象传入到Vue实例
export default router;
