
import Vue from 'vue'
export const Event = new Vue()

Event.$on('backHome', (path) => {
  const history = window.sessionStorage
  const index = history.getItem(path)
  console.log(index)
//   Event.$router.go(index * (-1))
})
