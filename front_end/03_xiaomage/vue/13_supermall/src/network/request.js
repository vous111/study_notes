import axios from "axios";
// 1.创建axios实例
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/v1',
    timeout: 5000
  });

  //2.axios拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(
    config => {
      // console.log('config:', config);
      return config; // 拦截后，需要把config返回出去
    },
    err => {
      console.log(err);
    }
  );
  // 2.2 响应拦截
  instance.interceptors.response.use(
    res => {
      // console.log(res);
      return res.data;
    },
    err => {
      console.log(err);
    }
  );

  // 3.发送真正的网络请求
  return instance(config);
}
