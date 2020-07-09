import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },

  mutations: {
    set (state, payload): void {
      Object.assign(state, payload)
    },
  },

  actions: {
  },
})
