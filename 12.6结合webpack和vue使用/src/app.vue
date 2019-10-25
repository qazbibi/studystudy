<template>
  <div>{{msg}}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hahah'
    }
  },
  methods: {
    show() {
      console.log('这是app组件')
    }
  }
}
</script>

<style>
div {
  color: red
}
</style>