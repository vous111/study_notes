<template>
  <div id="app">
      <h2>---------App内容---------</h2>
      <h3>当前计数：{{$store.state.counter}}</h3>
      <h3>当前计数的平方：{{$store.getters.counterSquare}}</h3>

      <h2>---------App内容：modules中的内容---------</h2>
      <h3>{{$store.state.a.name}}</h3>
      <button @click="updateName">修改名字</button>
      <h3>{{$store.getters.fullName1}}</h3>
      <h3>{{$store.getters.fullName2}}</h3>
      <h3>{{$store.getters.fullName3}}</h3>
      <button @click="ASYNCUpdateName">异步修改名字</button>


      
      <h2>---------App内容：getters相关信息---------</h2>
      <button @click="increaseCounter">+</button>
      <button @click="decreaseCounter">-</button>
      <br>
      <button @click="addCount(5)">+5</button>
      <button @click="addCount(10)">+10</button>
      <br>
      <button @click="addStudent">添加学生</button>
      <h3>所有学生：</h3>
      <ul>
        <li v-for="s in $store.state.students">{{s}}</li>
      </ul>

      <h2>---------App内容：info对象的内容是否是响应式---------</h2>
      <h3>{{$store.state.info}}</h3>
      <button @click="updateInfo">更新</button>

      <h2>---------HelloVuex组件--------</h2>
      <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex.vue'
  import {INCREASE} from './store/mutations-types.js'
  export default {
    name:'App',
    components:{
      HelloVuex
    },
    methods:{
      increaseCounter(){
        this.$store.commit(INCREASE)
      },
      decreaseCounter(){
        this.$store.commit('decrease')
      },
      addCount(count){
        // 1.普通的封装 this.$store.commit('要提交的mutations名字',要传入的参数)
        // this.$store.commit('increase Count', count)
        
        // 异步
        // this.$store.dispatch('ASYNCIncreaseCount', count)

        // 参数带回调
        // 第一种 传回调函数
        // this.$store.dispatch('ASYNCIncreaseCount', 
        //   {
        //     message:count,
        //     success: ()=>{
        //       console.log('我成功了');
        //     }
        //   }
        // )

        // 第二种 通过Promise
        this.$store.dispatch('ASYNCIncreaseCount', count).then(res=>{
          console.log(res);
        })


        // 2.特殊封装,里面的参数变成对象
        // this.$store.commit({
        //   type:'increaseCount',
        //   count // count:count
        // })
      },
      addStudent(){
        const stu = { name: "e", age: 22 }
        this.$store.commit('addStudent', stu)
      },
      updateInfo(){
        this.$store.commit('updateInfo')
      },
      updateName(){
        this.$store.commit('updateName', 'zhangsan')
      },
      ASYNCUpdateName(){
        this.$store.dispatch('ASYNCUpdateName')
      }
    }
  }
</script>
<style>

</style>
