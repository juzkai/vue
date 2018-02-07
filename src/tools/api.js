
import axios from 'axios'
import store from '../store/index'
import { APP_SERVICE_URL_DEV, APP_SERVICE_URL_PRO, APP_SERVICE_TIMEOUT, APP_TITLE } from './config'
import Vue from 'vue'
// 创建请求实例
const instance = axios.create()

if (process.env.NODE_ENV === 'development') {
  instance.defaults.baseURL = APP_SERVICE_URL_DEV
} else if (process.env.NODE_ENV === 'production') {
  instance.defaults.baseURL = APP_SERVICE_URL_PRO
}

// instance.defaults.headers.post['content-Type'] = 'application/x-www-form-urlencoded'
// instance.defaults.headers.post['content-Type'] = 'application/json;charset=UTF-8'
instance.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
instance.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest'
instance.defaults.timeout = APP_SERVICE_TIMEOUT
// instance.defaults.responseType = 'json'
// 添加一个请求拦截器
instance.interceptors.request.use(config => {
  // 在请求发出之前进行一些操作
  // config.headers.Accept = 'application/json'
  // 显示
  store.commit('updateLoadingStatus', {isLoading: true})
  return config
}, error => {
  // request error
  store.commit('updateLoadingStatus', {isLoading: false})
  return Promise.reject(error)
})

// 添加一个响应拦截器
instance.interceptors.response.use(response => {
  store.commit('updateLoadingStatus', {isLoading: false})
  // 在这里对返回的数据进行处理
  let status = response.status
  let data = response.data
  if (status === 200) {
    return Promise.resolve(data)
  } else {
    return Promise.reject(response)
  }
}, error => {
  // response error
  store.commit('updateLoadingStatus', {isLoading: false})
  Vue.$vux.toast.show({
    title: APP_TITLE,
    type: 'warn',
    text: '系统异常'
  })
  return Promise.reject(error)
})

const toBodyString = obj => {
  let ret = []
  for (let key in obj) {
    key = encodeURIComponent(key)
    // key = key;
    let values = obj[key]
    if (values && values.constructor === Array) { // 数组
      let queryValues = []
      for (let i = 0, len = values.length, value; i < len; i++) {
        value = values[i]
        queryValues.push(this.toQueryPair(key, value))
      }
      ret = ret.concat(queryValues)
    } else { // 字符串
      ret.push(toQueryPair(key, values))
    }
  }
  return ret.join('&')
}
const toQueryPair = (key, value) => {
  if (typeof value === 'undefined') {
    return key
  }
  return key + '=' + encodeURIComponent(value === null ? '' : String(value))
}
export default {
  post: (url, data) => {
    return instance.post(url, toBodyString(data))
      .then(response => {
        return response
      })
      .catch(error => {
        console.log(error)
      })
  },
  get: (url) => {
    return instance.get(url)
      .then(response => {
        return response
      })
      .catch(error => {
        console.log(error)
      })
  }
}
