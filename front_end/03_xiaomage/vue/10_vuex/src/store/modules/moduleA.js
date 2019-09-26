export default {
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