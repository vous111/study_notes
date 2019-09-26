import Vue from "vue";
import Vuex from "vuex";
import {INCREASE} from "./mutations-types"

// 1.安装插件
Vue.use(Vuex);

const moduleA = {
  state:{
    name:'xiaoming'
  },
  // 调用modules里面的方法时，与store一样，避免方法名字相同
  mutations:{
    updateName(state, payload){
      state.name = payload
    }
  },
  getters:{
    fullName1(state){
      return state.name + '111'
    },
    fullName2(state, getters){
      return getters.fullName1 + '222'
    },
    fullName3(state, getters, rootState){
      return getters.fullName2 + rootState.counter
    },
  },
  actions:{
    ASYNCUpdateName(context){
      setTimeout(()=>{
        context.commit('updateName','wangwu')
      },1000)
    }
  },
}

// 2.创建对象
// const store = new Vuex.Store({
export default new Vuex.Store({
	state: {
		counter: 2,
		students: [
			{ name: "a", age: 18 },
			{ name: "b", age: 19 },
			{ name: "c", age: 14 },
			{ name: "d", age: 16 }
    ],
    info:{
      name:'kobe',
      age:'40'
    }
  },
  // Vue的store状态的更新的唯一方式：mutations
  // 不能在mutations里面进行任何的异步操作
	mutations: {
    // 类型常亮
		[INCREASE](state) {
			state.counter++;
		},
		decrease(state) {
			state.counter--;
    },
    increaseCount(state, count){
      // 异步操作不能在这里执行
      // setTimeout(()=>{
      //   state.counter += count
      // },1000)
      state.counter += count
    },
    addStudent(state, student){
      state.students.push(student)
    },
    updateInfo(state){
      state.info.name='vous'
      // 关于响应式
      // state.info['address']='vous' // 界面不会刷新新添加的属性
      // Vue.set(state.info, 'address', 'vous') // Vue.set()会将改变的对象添加到响应式系统中

      // delete state.info.age
      // Vue.delete(state.info, 'age')
    },
  },
  // 处理异步事件 调用方法：this.$store.dispatch("action的名字",参数)
	actions: {
    //这里我们传入context上下文，里面包含 commit, state ,getters 这三个属性都可以通过context来调用到并且触发内部方法
    // 第一种
    // ASYNCIncreaseCount(context, payload){
    //   setTimeout(()=>{
    //     context.commit('increaseCount', payload.message)
    //     payload.success()
    //   }, 1000)
    // }
    // 第二种
    // ASYNCIncreaseCount(state, commit, rootState, count){
    ASYNCIncreaseCount(context, count){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('increaseCount', count)
          console.log('里面完成了提交');
          resolve('我是回调传进来的参数')
        },1000)
      })
    }
  },
	getters: {
		counterSquare(state) {
			return state.counter * state.counter;
		},
		more18stu(state) {
			return state.students.filter(s => s.age >= 18);
			// return state.students.filter(s=>{
			//   return s.age >= 18
			// })
    },
    more18stuLength(state,getters) {
			return getters.more18stu.length
    },
    moreAgeStu(state){
      // 需要传参的函数写法
      // return function(age){
      //   return state.students.filter(s => s.age >= age);
      // }
      return age =>{
        return state.students.filter(s => s.age >= age)
      }
    }
	},
	modules: {
    a:moduleA,
    b:{
      state:{},
      getters:{},
      mutations:{},
      actions:{},
    }
  }
});

// 3.导出stroe对象
// export default store

// ES6对象的解构
// const obj = {
//   name:'kobe',
//   age:40,
//   height:1.98
// }

// const {age, name, height} = obj
