// 1.导入{}中定义的变量
import {flag, sum} from "./aaa.js";

if (flag){
  console.log('成功导入aaa.js');
  console.log(sum(10,20));
}

// 2.直接导入export定义的变量
import {num1} from "./aaa.js";
console.log(num1);

// 3.导入export的function/class
import {mul, Person} from "./aaa.js"

console.log(mul(10,20));

const p = new Person();
p.name = '小明'
p.run();

// 4.export default,用户可自定义导入的名字
import addr from "./aaa.js"
addr(123);

// 5.全部导入
import * as aaa from "./aaa.js"
console.log(aaa.num1);