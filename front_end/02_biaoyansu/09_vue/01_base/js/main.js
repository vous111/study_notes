var app = new Vue({
    el: '#app', // 作用域

//     data:{
//         name:'',
//         age:''
//     }

// ************************************** v-for **************************************
//     data:{
//         foodList:[
//             {
//                 name:'apple',
//                 price:'100',
//                 discount:'0.5'
//             },
//             {
//                 name:'banana',
//                 price:'50',
//                 discount:'0.6'
//             },
//             {
//                 name:'pear',
//                 price:'80',
//                 discount:'0.4'
//             },
//         ]
//     }

// ************************************** v-bind:(:) ************************************** 
// 缩写语法：<span :class="classProperty"></span >，解释：: 后面的 class 是参数，classProperty 则在官方文档中被称为“预期值”
    // data:{
    //     url:'http://www.baidu.com',
    //     kclass:"btn btn-default",
    //     isActive:true
    // }

// ************************************** v-on:(@) ************************************** 
// v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码

    // methods:{
    //     onClick:function(){
    //         console.log('clicked');
    //     },

    //     onEnter:function(){
    //         console.log('Entered')
    //     },
    //     onLeave:function(){
    //         console.log('Leaved')
    //     },
    //     onSubmit:function(){
    //         console.log('Submited')
    //     },

    //     // @submit="onSubmit($event)
    //     // onSubmit:function(e){
    //     //     e.preventDefault();
    //     //     console.log('Submited')
    //     // },
    //     onEnter:function(){
    //         // @keyup.Enter="onEnter"
    //         console.log('Entered')
    //     },

    // }

// ************************************** v-model ************************************** 

    // data:{
    //     // 三个修饰符
    //     // v-model.lazy 鼠标blur再刷新
    //     // v-model.trim 严格控制空格数
    //     // v-model.number 转化为number类型
    //     // name:"whh",
    //     // username:"123",
    //     // age:"10",

    //     sex1:"",
    //     sex2:[],
    //     aticle:"1233333333333333333333",
    //     from:"1",
    //     go:[3],
    // },

// ************************************** 控制流指令 ************************************** 
    // data:{
    //     role:'admin'
    // }

// ************************************** 计算属性 ************************************** 
    // data:{
    //     subjects:{
    //         math:90,
    //         physics:80,
    //         English:90
    //     }

    // },
    // computed:{
    //     sum:function(){
    //         var sum = 0;
    //         for(let i in this.subjects){
    //             sum += parseFloat(this.subjects[i]);
    //         }
    //         return sum;
    //     },
    //     average:function(){
    //         return Math.round(this.sum/3);
    //     }
    // }

})


