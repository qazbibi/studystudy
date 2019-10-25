console.log('ok');
import Vue from 'vue'

// 导入所有的 MIntUI 组件
// 导入 Mint-UI
// import MintUI from 'mint-ui' //把所有的组件都导入进来
// // 这里 可以省略 node_modules 这一层目录
import 'mint-ui/lib/style.css'
// // 将 MintUI 安装到 Vue 中
// Vue.use(MintUI) // 把所有的组件，注册为全局的组件

import { Button } from 'mint-ui'
Vue.component(Button.name, Button)
// Vue.use(Button)


import 'bootstrap/dist/css/bootstrap.css'
import App from './app.vue'
import './css/index.css'


var vm = new Vue({
  el: '#app',
  data: {},
  render: c => c(App),
})