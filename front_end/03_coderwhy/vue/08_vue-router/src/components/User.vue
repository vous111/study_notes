<template>
  <div>
      <h2>我是用户</h2>
      <h3>{{userId}}</h3>
      <h3>{{$route.params.userId}}</h3>
  </div>
</template>

<script>
  export default{
    name:"User",
    computed:{
      userId(){
        // $route当前处于活跃状态的路由，即VueRouter中routes的某个路由
        return this.$route.params.userId //path:'/user/:userId'
      }
    }
  }
</script>

<style>
  
</style>