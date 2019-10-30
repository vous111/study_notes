<template>
	<div id="app">
    <!-- {{results}} -->
  </div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "App",
		data() {
			return {
				results: "111"
			};
		},
		// created() {
		// 	axios({
		// 		url: "http://httpbin.org/get"
		// 	}).then(res => {
    //     console.log(res);
    //     this.results = res.data
		// 	});
		// }
	};
</script>

<style></style>
