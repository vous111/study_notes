// ************************************** 过滤器 *************************************
// Vue.filter('meter', function(val, unit){
//     val = val || 0;
//     unit = unit || 'm';
//     return (val / 1000).toFixed(2) + unit;
// })

// Vue.filter('currency', function(val, unit){
//     val = val || 0;
//     unit = unit || '$';
//     return (val*7.0659).toFixed(4)+unit;
// })

// var app = new Vue({
//   el: "#app",
//   data:{
//     price:'',
//     length:'',
//   }
// });

// ************************************** 自定义指令 *************************************
// Vue.directive('pin',function(el, binding){
//     console.log(el);  // el代表当前绑定的元素
//     console.log(binding);// binding是一个对象，有name,value,等属性
//     console.log(binding.name);// 自定义指令的名称
//     console.log(binding.value);// 自定义指令对应的值，存在于data中

//     var pinned=binding.value;
//     var position = binding.modifiers;
//     var arg = binding.arg;

//     // modifiers：一个包含修饰符的对象；例如：v-my-directive.a.b，modifiers的值为{'a':true,'b':true}
//     // arg：传给指令的参数；例如：v-my-directive:foo，arg的值为 'foo'；

//     if(pinned){
//         el.style.position = 'fixed';
//         for(var key in position){
//             if (position[key]){
//                 el.style[key] = '10px';
//             }
//         };
//         if (arg === 'bg_yellow'){
//             el.style.background = 'yellow';
//         }
//         // el.style.top = '20px';
//         // el.style.right = '20px';
//     }else{
//         el.style.position = 'static'
//     }

// })

// new Vue({
//     el:'#app',
//     data:{
//         card1:{
//             pinned:false,
//         },
//         card2:{
//             pinned:false,
//         }
//     }
// })

// ************************************** 混合 mixins *************************************
// var base = {
//   methods: {
//     show: function() {
//       this.visible = true;
//     },
//     hide: function() {
//       this.visible = false;
//     }
//   },
//   data: function() {
//     return {
//       visible: false
//     };
//   }
// };
// Vue.component("tooltip", {
//   template: `
//         <div>
//             <span @mouseenter="show" @mouseleave="hide">周杰伦</span>
//             <div v-if="visible" style="color:pink">
//             Jay Zhou
//             </div>
//         </div>
//     `,
//   mixins: [base],
// //   这里的data会覆盖mixins里面的
//   data:function(){
//       return{
//           visible:true
//       }
//   }
// // mixins就是定义一部分公共的方法或者计算属性,然后混入到各个组件中使用,方便管理与统一修改
// });
// Vue.component("popup", {
//   template: `
//         <div>
//             <button @click="show">显示/隐藏</button>
//             <div v-if="visible">
//                 <span @click="hide" style="cursor:pointer">X</span>
//                 <h1>title</h1>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, amet atque
//                 cumque at nulla molestias facilis reprehenderit laborum accusamus iusto
//                 at.
//             </div>
//         </div>
//      `,
//      mixins: [base],
// });

// new Vue({
//   el: "#app",
//   data: {}
// });


// ************************************** 插槽 slot *************************************
Vue.component('panel',{
    template:'#panel-tpl',
})

new Vue({
  el: "#app",
  data: {}
});