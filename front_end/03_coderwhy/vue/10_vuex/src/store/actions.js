export default {
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
  ASYNCIncreaseCount(context, count) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit("increaseCount", count);
        console.log("里面完成了提交");
        resolve("我是回调传进来的参数");
      }, 1000);
    });
  }
}