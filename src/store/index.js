// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  token:'test_token',
  account: {
    username: 'xxx',
    password: '',
    ip: ''
  },
  accountList: []
}

const store = new Vuex.Store({
  state,
  //mutations 方法应遵循单一事件原则，这样vuetool里就能更清楚记录变化
  mutations,
  actions,
  getters,
  modules: {
    
  },
  plugins: debug ? [createLogger()] : []
})

export default store
