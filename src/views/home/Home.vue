<template>
  <div>
    <span>路由userId：{{userId}}</span>
    <button @click="toIndex">点击跳转Index</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userId: undefined
    }
  },
  created() {
    this.userId = this.$route.params.userId;
  },
  methods: {
    toIndex() {
      this.$router.push({name: 'Index'})
    }
  }
}
</script>

<style>

</style>