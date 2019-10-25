import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    subtract(state, obj) {
      console.log(obj)
      state.count -= (obj.c + obj.d)
    }
  },
  getters: {
    optCount: function (state) {
      return '当前最新的count值是：' + state.count
    }
  }
})

import app from './app.vue'

new Vue({
  el: '#app',
  render: h => h(app),
  store
})