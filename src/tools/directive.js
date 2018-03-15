import Vue from 'vue'
// 字母转换成大写
Vue.directive('touppercase', {
  update: (el, binding) => {
    let id = el.querySelector('input').getAttribute('id')
    setTimeout(() => {
      document.getElementById(id).value = binding.value.toUpperCase()
    }, 10)
  }
})
