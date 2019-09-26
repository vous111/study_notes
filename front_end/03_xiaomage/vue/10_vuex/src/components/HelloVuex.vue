<template>
	<div>
    <h3>当前计数：{{ $store.state.counter }}</h3>

    <h3>年龄大于18的学生：{{$store.getters.more18stuLength}}</h3>
    <ul>
      <li v-for="s in $store.getters.more18stu">{{s}}</li>
    </ul>
    <h3>年龄大于(15)的学生：</h3>
    <ul>
      <li v-for="s in $store.getters.moreAgeStu(15)">{{s}}</li>
    </ul>

	</div>
</template>

<script>
	export default {
		name: "HelloVuex",
		data() {
			return {
				students: this.$store.state.students
			};
		}
	};
</script>

<style></style>
