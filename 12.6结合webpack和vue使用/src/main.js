console.log('ok');
import Vue from 'vue'
import Mint from 'mint-ui'
import App from './app.vue'
import './css/index.css'
import './images/111.jpg'

Vue.use(Mint)
var vm = new Vue({
  el: '',
  data: {},
  render: c => c(App)
})