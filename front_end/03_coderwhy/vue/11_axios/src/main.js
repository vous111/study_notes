import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
	store,
	render: h => h(App)
}).$mount("#app");

// 1.基本使用
// axios({
// 	url: "http://httpbin.org/get",
// 	// 默认是get请求
// 	method: "get",
// 	params: {
// 		// 专门针对get请求的参数拼接
// 	}
// }).then(res => {
// 	console.log(res);
// });

// 2.发送并发请求
// axios
// 	.all([
// 		axios.get("http://httpbin.org/get"),
// 		axios({
// 			url: "http://httpbin.org/post",
// 			method: "post"
// 		})
// 	])
// 	// .then(results => {
// 	// 	console.log(results);
// 	// });
// 	// 使用axios.spread可得到每一个并发请求的数据
// 	.then(
// 		axios.spread((get, post) => {
// 			console.log("get:", get);
// 			console.log("post:", post);
// 		})
// 	);

// 3.配置相关信息
// axios.defaults.baseURL = "http://httpbin.org"
// axios.defaults.timeout = 1000 // 设置超时时间

// axios({
//   url: "/get", // 请求地址
//   // 请求类型：method:'get'
//   // 请求根路径：baseURL:'http://httpbin.org'
//   // 请求前的数据处理：transformRequest:[function(data)]
//   // 请求后的数据处理：transformResponse:[function(data)]
//   // 自定义的请求头：headers:{''}
//   // URL查询对象：params:{id:12}

//   // 如果请求类型是post，请求体为：data:{key:'aa'}
// }).then(res => {
// 	console.log(res);
// });

// 4.创建对应的实例
// const instance1 = axios.create({
//   baseURL:"http://httpbin.org",
//   timeout:1000
// })

// instance1.get("/get").then((res)=>{
//   console.log(res);
// })

// const instance2 = axios.create({
//   baseURL:"http://httpbin.org",
//   timeout:10
// })

// instance2.get("/get").then((res)=>{
//   console.log(res);
// })

// 5.如何调用封装|的request
import { request } from "./network/request";

// 最终方案,因为axios本身就是包装过的Promise
request({
	url: "/get"
})
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log(err);
	});

// 第一种方案
// request(
// 	{
// 		url: "/get"
// 	},
// 	res => {
// 		console.log(res);
//   },
//   err =>{
//     console.log(err);
//   }
// );

// 第二种方案
// request({
//   baseConfig:{
//     url:'/get'
//   },
//   success:res=>{
//     console.log(res);
//   },
//   failure:err=>{
//     console.log(err);
//   }
// })

// 第三种方案,使用Promise回调
// request({
// 	url: "/get"
// })
// 	.then(res => {
// 		console.log(res);
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});