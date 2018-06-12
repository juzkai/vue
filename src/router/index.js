import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import {APP_ROUTE} from './router'

Vue.use(Router)

const history = window.sessionStorage
// history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()

const router = new Router({
  // mode: 'history', // 去掉链接中的#
  routes: APP_ROUTE
})

router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', {isLoading: true})
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex === 0 && historyCount !== 0) {
    history.clear()
  }
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', {direction: ''})
      } else {
        store.commit('updateDirection', { direction: 'reverse' })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  // 页面切换关闭提示框，主要针对浏览器及安卓回退行为
  Vue.$vux.alert.hide()
  Vue.$vux.confirm.hide()
  Vue.$vux.toast.hide()
  store.commit('updateLoadingStatus', {isLoading: false})
})

export default router
