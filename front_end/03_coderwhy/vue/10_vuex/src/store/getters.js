export default {
  counterSquare(state) {
    return state.counter * state.counter;
  },
  more18stu(state) {
    return state.students.filter(s => s.age >= 18);
    // return state.students.filter(s=>{
    //   return s.age >= 18
    // })
  },
  more18stuLength(state, getters) {
    return getters.more18stu.length;
  },
  moreAgeStu(state) {
    // 需要传参的函数写法
    // return function(age){
    //   return state.students.filter(s => s.age >= age);
    // }
    return age => {
      return state.students.filter(s => s.age >= age);
    };
  }
}