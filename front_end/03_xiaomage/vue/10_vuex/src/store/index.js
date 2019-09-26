import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
// 1.安装插件
Vue.use(Vuex);

const state = {
	counter: 2,
	students: [
		{ name: "a", age: 18 },
		{ name: "b", age: 19 },
		{ name: "c", age: 14 },
		{ name: "d", age: 16 }
	],
	info: {
		name: "kobe",
		age: "40"
	}
};

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {
		a: moduleA
	}
});

