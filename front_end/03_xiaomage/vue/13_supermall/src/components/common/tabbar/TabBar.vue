<template>
	<div id="tab-bar">
    <slot></slot>
		<!-- <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="">
      首页</div>
		<div class="tab-bar-item">分类</div>
		<div class="tab-bar-item">购物车</div>
		<div class="tab-bar-item">我的</div> -->
	</div>
</template>

<script>
	export default {
		name: "TabBar"
	};
</script>

<style>
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 2px rgb(80, 64, 64, 0.2)
  }
</style>
