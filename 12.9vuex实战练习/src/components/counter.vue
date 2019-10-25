<template>
  <div>
    <input type="button" value="减少" @click="remove">
    <input type="button" value="增加" @click="add">
    <br>
    <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>
export default {
  data() {
    return {
      // count: 0
    };
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    remove() {
      this.$store.commit("subtract", { c: 3, d: 1 });
    }
  },
  computed:{
    fullname: {
      get(){},
      set(){}
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
