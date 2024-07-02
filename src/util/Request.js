import axios from 'axios'
import { useRouter } from "vue-router"
import {
  getToken,
  removeToken
} from './cookie'

let router = useRouter()

const request = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

request.interceptors.request.use(config => {
  config.headers['token'] = getToken() // 请求头带上token
  return config
}, error => {
  return Promise.reject(error)
})

// //拦截响应
request.interceptors.response.use(response => {
  if (response.data && response.data.code === 401) {
    removeToken()
    router.push({ name: 'login' })
  } else if (response.data.code == 503) {
    this.$notify({
      title: '警告',
      message: '服务器暂未启动',
      type: 'warning'
    });
  }
  return response.data
  // return response
}, error => {
  return Promise.reject(error)
})
//get请求
export function getAxios(Url, data) {
  return request({
    url: Url,
    method: 'get',
    params:data
  })
}

export function postAxios(Url, data) {
  return request({
    url: Url,
    method: 'post',
    data:data
  })
}
export default request
