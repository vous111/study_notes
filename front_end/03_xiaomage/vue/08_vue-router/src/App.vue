<template>
	<div id="app">
		<h1>我是App组件</h1>
		<router-link to="/home" tag="button">首页 </router-link>
		<router-link to="/about" tag="button">关于</router-link>
		<router-link v-bind:to="'/user/'+userId" tag="button">用户</router-link>
		<!-- <router-link to="/profile" tag="button">档案</router-link> -->
		<router-link :to="{path:'/profile', query:{name:'why', age:18}}" tag="button">档案</router-link>
		<!-- router-link属性 https://www.cnblogs.com/chengjunL/p/6282125.html -->

		<!-- <button @click="homeClick">首页</button>
		<button @click="aboutClick">关于</button>
		<button @click="userClick">用户</button>
		<button @click="profileClick">档案</button> -->
		<keep-alive exclude="User,Profile">
			<!-- exclude="user":user和Profile组件不缓存(逗号后不加空格) -->
				<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	export default {
		name:"App",
		data(){
			return{
				userId:'haha'
			}
		},
		methods:{
			homeClick(){
				// 通过代码修改vue-router
				this.$router.push('/home');
				// this.$router.replace('home');
				// console.log('aboutClick');

			},
			aboutClick(){
				// $router是VueRouter对象
				this.$router.push('/about');
				// this.$router.replace({path:'about'});
				console.log('aboutClick');
			},
			userClick(){
				this.$router.push('/user/'+this.userId);
			},
			profileClick(){
				this.$router.push({path:'/profile', query:{name:'why', age:18}});
			},
		}
	}
</script>

<style>
	.u-link--Active{
		color: red
	}
</style>


