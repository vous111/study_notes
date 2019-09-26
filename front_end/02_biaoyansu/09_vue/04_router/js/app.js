// ************************************** 安装和基本配置 **************************************
// var routes = [
//   {
//     path: "/",
//     component: {
//       template: `
//                 <div>
//                     <h1>首页</h1>
//                 </div>
//             `
//     }
//   },
//   {
//     path: "/about",
//     component: {
//       template: `
//                 <div>
//                     <h1>关于我们</h1>
//                 </div>
//             `
//     }
//   }
// ];

// ************************************** 传参、子路由、手动访问和传参 **************************************
// var routes = [
//   {
//     path: "/",
//     component: {
//       template: `
//                 <div>
//                     <h1>首页</h1>
//                 </div>
//             `
//     }
//   },
//   {
//     path: "/about",
//     component: {
//       template: `
//                 <div>
//                     <h1>关于我们</h1>
//                 </div>
//             `
//     }
//   },
//   {
//     path: "/user/:name",
//     name: "user",
//     component: {
//       template: `
//                 <div>
//                     <div>我叫：{{$route.params.name}}</div>
//                     <div>我今年：{{$route.query.age}}岁了（?age=20）</div>
//                     <!-- <router-link :to="'/user/'+ $route.params.name+'/more'">详细信息</router-link> -->
//                     <router-link to="more" append>详细信息</router-link>
//                     <router-view></router-view>
//                 </div>
//             `
//     },
//     // to="more" append 在当前地址上追加 more
//     // children是子路由，写法与routes相同
//     children: [
//       {
//         path: "more",
//         component: {
//           template: `
//                         <div>
//                             <div>用户{{$route.params.name}}的详细信息</div>
//                             <div>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
//                         </div>
//                     `
//         }
//       }
//     ]
//   }
// ];
// route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等
// $route.path
// 字符串，等于当前路由对象的路径，会被解析为绝对路径，如 "/home/news" 。
// $route.params
// 对象，包含路由中的动态片段和全匹配片段的键值对
// $route.query
// 对象，包含路由中查询参数的键值对。例如，对于 /home/news/detail/01?favorite=yes ，会得到$route.query.favorite == 'yes' 。
// $route.router
// 路由规则所属的路由器（以及其所属的组件）。
// $route.matched
// 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
// $route.name
// 当前路径的名字，如果没有使用具名路径，则名字为空

// var router = new VueRouter({
//   routes: routes
// });
// new Vue({
//   el: "#app",
//   router: router,
//   methods: {
//     surf: function() {
//       setTimeout(function() {
//         console.log(router)
//         router.replace("/about");
//         // $router.push({path:'home'});本质是向history栈中添加一个路由，在我们看来是 切换路由，但本质是在添加一个history记录
//         // $router.replace({path:'home'});//替换路由，没有历史记录
//         setTimeout(function() {
//           router.push({ name: "user", params: { name: "李栓蛋" }, query:{age:20} });// 如果提供了path,那么params和query的配置就会被忽略的
//         }, 1000);
//       }, 1000);
//     }
//   }
// });

// ************************************** 命名视图 **************************************
// var routes = [
//   {
//     path: "/",
//     component: {
//       template: `
//                 <div>
//                     <h1>首页</h1>
//                 </div>
//             `
//     }
//   },
//   {
//     path: "/user",
//     components: {
//       sidebar: {
//         template: `
//             <div>
//                 <ul>
//                     <li>用户列表</li>
//                     <li>权限管理</li>
//                 </ul>
//             </div>
//         `
//       },
//       content: {
//         template: `
//             <div>
//                 hhhhhhhhhhhhhhhhhhhhhhhhhhhh
//             </div>
//         `
//       }
//     }
//   },
//   {
//     path: "/post",
//     components: {
//       sidebar: {
//         template: `
//             <div>
//                 <ul>
//                     <li>帖子列表</li>
//                     <li>标签管理</li>
//                 </ul>
//             </div>
//         `
//       },
//       content: {
//         template: `
//             <div>
//                 hhhhhhhhhhhhhhhhhhhhhhhhhhhh
//             </div>
//         `
//       }
//     }
//   }
// ];

// var router = new VueRouter({
//   routes: routes
// });

// new Vue({
//   el: "#app",
//   router: router,
//   data: {}
// });

// ************************************** 命名视图 **************************************
var routes = [
  {
    path: "/",
    component: {
      template: `
          <h1>首页</h1>
      `
    }
  },
  {
    path: "/login",
    component: {
      template: `
          <h1>登录</h1>
      `
    }
  },
  {
    path: "/post",
    // 在meta对象中可以设置一些状态，来进行一些操作
    meta:{
        login_required:true,
    },
    component: {
      template: `
        <div>
        <h1>帖子管理</h1>
        <router-link to="rain" append>后座</router-link>
        <router-view></router-view>
        </div>
    `
    },
    children:[
        {
            path:'rain',
            component:{
                template:`
                    <div>
                        <h2>雨天asdrf后座</h2>
                    </div>
                `
            }
        }
    ]
  }
];

var router = new VueRouter({
  routes: routes
});

// router.beforeEach 路由访问之前的校验
router.beforeEach(function(to, from, next) {
  //   if (!(from.path =='/login') && to.path == "/post") {
  var is_login = false;

//   if (!is_login && to.path == "/post") {
    // some() 方法测试数组中的某些元素是否通过了指定函数的测试
  if (!is_login && to.matched.some(function(item){
    //   return item.path == '/post';
      return item.meta.login_required;
  })) {
    next("login");
  } else {
    next();
  }
});

// router.beforeEach 路由访问之后的校验
// router.beforeEach(function(to, from){
//     console.log(to);
//     console.log(from);
// })

new Vue({
  el: "#app",
  router: router,
  data: {
    //   is_login:false,
  }
});

