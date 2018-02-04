import {APP_TITLE, DIALOG_DURATION} from './config'
import Vue from 'vue'
export default {
  alertMsg: (msg, ok) => {
    if (ok && typeof ok !== 'function') {
      console.error('parameter error')
      return
    }
    Vue.$vux.alert.show({
      title: APP_TITLE,
      content: msg || '',
      // onShow () {
      //   return ok ? ok() : ''
      // },
      onHide () {
        return ok() || ''
      }
    })
  },
  toastMsg: (msg, option, ok) => {
    let def = {
      time: DIALOG_DURATION, // 显示时间
      type: 'text', // 类型，可选值 success, warn, cancel, text
      position: 'middle', // 显示位置，可选值 default, top, middle, bottom
      width: '90%', // 宽度
      isShowMask: true // 是否显示遮罩，如果显示，用户将不能点击页面上其他元素
    }
    if (typeof option === 'number') {
      def.time = option
    }
    if (typeof option === 'object') {
      def.time = option.time || def.time
      def.type = option.type || def.type
      def.width = def.type === 'text' ? def.width : '7.6em'
      def.position = option.position || def.position
    }
    Vue.$vux.toast.show({
      text: msg || '', // 提示内容，支持 html
      position: def.position,
      time: def.time * 1000,
      type: def.type,
      width: def.width,
      isShowMask: def.isShowMask,
      onHide: ok || option
    })
  },
  toastIcon: (type, ok) => {
    let def = {
      time: DIALOG_DURATION, // 显示时间
      type: type === 'text' ? 'success' : type, // 类型，可选值 success, warn, cancel, text
      position: 'middle', // 显示位置，可选值 default, top, middle, bottom
      isShowMask: true, // 是否显示遮罩，如果显示，用户将不能点击页面上其他元素
      text: '操作成功'
    }
    if (type === 'warn') {
      def.text = '警告'
    } else if (type === 'cancel') {
      def.text = '取消'
    }
    Vue.$vux.toast.show({
      text: def.text, // 提示内容，支持 html
      position: def.position,
      time: def.time * 1000,
      type: def.type,
      width: def.width,
      isShowMask: def.isShowMask,
      onHide: ok || type
    })
  }
}
