import axios from "axios";

const instance = axios.create({
  baseURL: 'http://123.207.32.32:9001/',
  timeout: 5000
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  if (err && err.response.status) {
    switch(err.response.status) {
      case 404:
        console.log("页面不存在");
        break
      case 400:
        console.log("请求错误")
        break
      case 401:
        console.log("未授权访问")
        break
      default:
        console.log("其他错误")
    }
  }
  return err
})

export default instance