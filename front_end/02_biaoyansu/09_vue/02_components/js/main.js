/* 如果把Vue看成一个家庭（相当于一个单独的components)，女主人一直在家里指派($emit)男人做事，而男人则一直监听($on)着女士的指派($emit)里eventName所触发的事件消息，
一旦 $emit 事件一触发，$on 则监听到 $emit 所派发的事件，派发出的命令和执行派执命令所要做的事都是一一对应的*/

// ************************************** 全局及局部组件 **************************************
// var alert_components = {
//     template:'<button @click="on_click">弹弹弹</button>', //可见内容
//     methods:{
//         on_click:function(){
//             alert("Yo.");
//         }
//     }
// }
// ;
// var app = new Vue({
//     el:'#app1',
//     components:{
//         alert:alert_components,
//     }
// });

// ************************************** 配置组件 *************************************
// Vue.component('like',{
//     // template:'<button @click="toggle_like()" :class="{liked:liked}">赞{{like_count}}</button>',
//     template:"#like-component-tpl",
//     data:function(){
//         return {
//             like_count:10,
//             liked:false,
//         }
//     },
//     methods:{
//         toggle_like:function(){
//             if(!this.liked){
//                 this.like_count ++;
//             }else{
//                 this.like_count --;
//             }
//             this.liked = !this.liked;
//         }
//     }
// })

// var app = new Vue({
//     el:"#app",
// })

// ************************************** 父子通信 *************************************
// Vue.component('user',{
//     template:'<a :href="\'/user/\' + username">@{{username}}</a>',
//     props:['username'], // 用于父子组件间传参的属性
//     methods:{},
// })

// var app = new Vue({
//     el:"#app",
// })

// ************************************** 子父通信 *************************************
// Vue.component("balance", {
//   template: `
//     <div>
//         <show @show-balance="show_balance(123)"></show>
//         <div v-if="show">
//             您的余额：￥99999
//             <hide @hide-balance="hide_balance"></hide>
//         </div>
//     </div>
//     `,
//   methods: {
//     show_balance: function(data) {
//       this.show = true;
//       console.log(data);
//     },
//     hide_balance: function(data) {
//       this.show = false;
//       console.log(data);
//     }
//   },
//   data: function() {
//     return {
//       show: false
//     };
//   }
// });

// Vue.component("show", {
//   template: `
//     <button @click="on_click()">显示余额</button>
//     `,
//   methods: {
//     on_click() {
//       this.$emit("show-balance", { a: 1, b: 2 }); //this.$emit 触发某个事件（事件名，参数）
//     }
//   }
// });

// Vue.component("hide", {
//   template: `
//     <button @click="on_hide()">隐藏余额</button>
//     `,
//   methods: {
//     on_hide() {
//       this.$emit("hide-balance", { a: 1, b: 2 });
//     }
//   }
// });

// var app = new Vue({
//   el: "#app"
// });

// ************************************** 任意及平行组件间通信 *************************************
// var Event = new Vue(); // 中心事件调度器

// Vue.component("huahua", {
//   template: `
//     <div>
//         花花说：<input @keyup="on_change" v-model="i_said"/>
//     </div>
//     `,
//   methods: {
//     on_change: function() {
//       // vm.$emit( event, […args] ):触发事件
//       Event.$emit("huahua-said-something", this.i_said);
//     }
//   },
//   data: function() {
//     return {
//       i_said: ""
//     };
//   }
// });
// Vue.component("shuandan", {
//   template: `
//     <div>
//         栓蛋听见花花说：{{huahua_said}}
//     </div>
//     `,
//   data: function() {
//     return {
//       huahua_said: ""
//     };
//   },
//   //mounted: html加载完成后执行。执行顺序：子组件-父组件
//   mounted: function() {
//     var me = this;
//     // vm.$on( event, callback ):监听事件
//     Event.$on("huahua-said-something", function(data) {
//       me.huahua_said = data;
//       console.log(me);
//     });
//   }
// });

// var app = new Vue({
//   el: "#app"
// });

