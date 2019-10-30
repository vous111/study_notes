import {INCREASE} from "./mutations-types"

export default {
	// 类型常亮
	[INCREASE](state) {
		state.counter++;
	},
	decrease(state) {
		state.counter--;
	},
	increaseCount(state, count) {
		// 异步操作不能在这里执行
		// setTimeout(()=>{
		//   state.counter += count
		// },1000)
		state.counter += count;
	},
	addStudent(state, student) {
		state.students.push(student);
	},
	updateInfo(state) {
		state.info.name = "vous";
		// 关于响应式
		// state.info['address']='vous' // 界面不会刷新新添加的属性
		// Vue.set(state.info, 'address', 'vous') // Vue.set()会将改变的对象添加到响应式系统中

		// delete state.info.age
		// Vue.delete(state.info, 'age')
	}
};
