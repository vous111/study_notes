<!-- about路由组件 -->
<template>
  <div>
    <h1>我是about</h1>
    <span>我是about的内容</span>
  </div>
</template>

<script>
    
  export default{
    name:"About",
    // 组件内的守卫
    beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // console.log('about beforeRouteEnter');
    next();
  },
  }
</script>

<style>
  
</style>