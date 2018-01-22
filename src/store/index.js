
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    appServiceUrl: '',
    isLogin: false
  },
  getters: {
    isLogin: state => {
      return state.isLogin
    }
  }
})
export default store
