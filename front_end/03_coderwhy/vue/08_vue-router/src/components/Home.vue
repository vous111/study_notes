<!-- home路由组件 -->
<template>
	<div>
		<h1>我是home</h1>

		<router-link to="/home/news">新闻</router-link>
		<router-link to="/home/message"> 消息</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "Home",
		data() {
			return {
				path: "/home/news"
			};
		},
		// 生命周期函数 created(组件被创建时),mounted(组件被挂载时),updated(界面有变化时)
		created() {
			console.log("home created");
		},
		destroyed() {
			console.log("home destroyed");
    },
    // activated和deactivated两个函数，只有该组件被保持了状态（使用了keep-alive）时才有效
		activated() {
			// console.log("活跃状态");
			this.$router.push(this.path);
		},
		deactivated() {
			// console.log("缓存状态");
		},
		beforeRouteLeave(to, from, next) {
			this.path = this.$route.path;
			next();
		}
	};
</script>

<style></style>
