
import Vue from 'vue'
export const Event = new Vue()

// 返回到首页
Event.$on('backHome', obj => {
  let vue = obj.vue
  let path = obj.path
  let history = window.sessionStorage
  let index = history.getItem(path)
  vue.$router.go(index * (-1))
})
