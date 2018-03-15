import Vue from 'vue'
// 字母转换成大写
Vue.directive('touppercase', {
  update: (el, binding) => {
    setTimeout(() => {
      el.querySelector('input').value = binding.value.toUpperCase()
    }, 10)
  }
})
