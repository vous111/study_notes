import axios from "axios";
// 最终方案，因为axios本身就是包装过的Promise
    // 1.创建axios实例
export function request(config) {
		const instance = axios.create({
			baseURL: "http://httpbin.org",
			timeout: 5000
    });
    
    //2.axios拦截器 
    // 2.1 请求拦截
    instance.interceptors.request.use(config=>{
      console.log('config:', config);
      // 1.比如config中的一些信息不符合服务器的要求
      // 2.比如每次发送网络请求的时候，都希望在界面中显示一个请求的图标
      // 3.某些网络请求(比如登录(token))，必须携带一些特殊信息
      return config // 拦截后，需要把config返回出去
    },err=>{
      console.log(err);
    })
    // 2.2 响应拦截
    instance.interceptors.response.use(res=>{
      // console.log(res);
      return res.data
    },err=>{
      console.log(err);
    })

		// 3.发送真正的网络请求
		return instance(config)
}


// 第一种方法
// export function request(config, success, failure){
//   // 1.创建axios实例
//   const instance = axios.create({
//   baseURL:"http://httpbin.org",
//   timeout:1000
//   })

//   // 发送真正的网络请求
//   instance(config)
//     .then(res=>{
//       // console.log(res);
//       success(res);
//     })
//     .catch(err=>{
//       // console.log(err);
//       failure(err)
//     })
// }

// 第二种方法
// export function request(config){
//   // 1.创建axios实例
//   const instance = axios.create({
//   baseURL:"http://httpbin.org",
//   timeout:1000
//   })

//   // 发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res=>{
//       // console.log(res);
//       config.success(res);
//     })
//     .catch(err=>{
//       // console.log(err);
//       config.failure(err)
//     })
// }

// 第三种方案,使用Promise回调
// export function request(config) {
// 	return new Promise((resolve, reject) => {
// 		const instance = axios.create({
// 			baseURL: "http://httpbin.org",
// 			timeout: 1000
// 		});

// 		// 发送真正的网络请求
// 		instance(config)
// 			.then(res => {
// 				resolve(res);
// 			})
// 			.catch(err => {
// 				reject(err);
// 			});
// 	});
// }

// export function instance2(){
// }

