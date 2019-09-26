<template>
  <div>
    <h2>我是Profile</h2>
    <h3>{{$route.query.name}}</h3>
    <h3>{{$route.query.age}}</h3>
  </div>
</template>

<script>
  export default{
    name:"Profile"
  }
</script>

<style>
  
</style>