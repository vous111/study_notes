// alert('hello world!');

// Object 对象
// var result = {
//     title: "中国男篮输了",
//     reason: "篮板球"
//   };
//   alert(result.reason);

// var obj = {
//     key1: 'val1',
//     key2: 'val2',
//     key3: 'val3',
//   }
  
//   function get_val(id) {
//     var key_name = 'key' + id; // 此处将id与'key'拼接在了一起
//     return obj[key_name];
//   }
  
//   get_val(1); // "val1"

// var obj = {
//     a: [1], // 数组
//     b: {}, // 对象
//     c: 1, // 数字
//     d: true, // 布尔值
//     e: 'yo', // 字符串
//   }

// 变量
// var a='hello world';
// var a={1:1}; //js中的object与python中的字典类似
// var b=[1];
// console.log(typeof a);
// console.log(a[1]);
// console.log(b.length);
// 1.2e4 = 12000

// if /else /else if
// a = true;
// a = 0;
// a = "";
// a = NaN;
// a = null;
// a = 0;

// if (a == 1) {
//   console.log("ture");
// } else if (a == 0) {
//   console.log("0");
// } else {
//   console.log("false");
// }

// switch
// var day = 1;
// switch (day) {
//   case 4:
//       console.log('今天是星期四')
//     break;
//   case 1:
//     console.log('今天是星期一');
//     break;
//   default://默认执行
//     break;
// };

// 运算符
// ++自增
// --自减
// += -= *= /= 类似python
// === 严格判断是否相等
// console.log("'1' == 1:", "1" == 1);
// console.log("'1' === 1:", "1" === 1);
// &&与 ||或

// for循环
// var i;
// for (i = 1; i <= 100; i++) {
//   console.log(i);
// }
// var result = [1,2,3,4];
// for(var i=0;i<result.length;i++){
//     console.log(result[i]);
// }

// while循环
// var i=100;
// while(i>0){
//     console.log(i);
//     i--;
// }

// 函数function
// function a(a){
//     console.log(a);
// }
// a(5);

// 闭包
// var user = {
//   nam: "王花花",
//   age: 20,
//   sex: "女"
// };
// user.age = 21;
// console.log("user:", user);

// function user(name) {
//   var age, sex;
//   return {
//     getName: function() {
//       return name;
//     },
//     setName: function(newName) {
//       name = newName;
//     },
//     getAge: function() {
//       return age;
//     },
//     setAge: function(newAge) {
//       age = newAge;
//     },
//     getSex: function() {
//       return sex;
//     },
//     setSex: function(newSex) {
//       sex = newSex;
//     }
//   };
// }
// var whh = user("WangHuaHua");
// whh.setAge(22);
// whh.setSex('female');

// var name = whh.getName();
// var sex = whh.getSex();
// var age = whh.getAge();
// console.log(name, sex, age);

// window对象：alert confirm prompt
// alert('你的电脑即将遭到病毒攻击，是否要下载全家桶？');
// confirm('您是否年满18周岁？');
// var name = prompt('你叫什么名字？');
// console.log("name:", name);

// window对象：计时器
// setTimeout(function(){
//     console.log("计时结束");
// }, 1000);

// var count = 1;
// var timer = setInterval(function(){
//     console.log("执行计时器:", count);
//     if(count == 5){
//         clearInterval(timer);//取消计时器
//         console.log("取消计时器");
//         return;
//     };
//     count++;
// }, 1000);
