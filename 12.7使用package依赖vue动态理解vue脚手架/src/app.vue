<template>
  <div>
    <h1>{{msg}}</h1>
    <mt-button type="default" icon="back" @click="show">default</mt-button>
    <mt-button type="primary" @click="showw">primary</mt-button>
    <mt-button type="danger" @click="unshow">danger</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      msg: 'hahahaaaaa',
      gltt: null
    }
  },
  created() {
    this.gl();
  },
  methods: {
    gl(){
      this.showw()
      setTimeout(()=>{
      this.unshow()
    },3000)
    },
    show() {
      console.log('这是app组件')
    },
    showw() {
      this.gltt = Toast({
        message: 'woshi提示',
        iconClass: 'glyphicon glyphicon-heart',
        duration: -1
      })
    },
    unshow(){
      this.gltt.close()
    }
  }
}
</script>

<style>
div {
  color: red;
}
</style>