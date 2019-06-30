<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-view class="aaa"></router-view>
  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Hi, I am Ning'
    }
  }
}
</script>

<style scoped>
</style>
