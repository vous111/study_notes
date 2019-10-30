let name = 'vous';
let age = '12';
let flag = true;

function sum(num1, num2){
  return num1 + num2
};

// 1.导出方式一
export {flag, sum}

// 2.导出方式二
export let num1=10;

// 3.导出函数/类
export function mul(num1, num2){
  return num1 * num2;
}

// 4.导出ES6中的类
export class Person{
  constructor(name){
    this.name = name
  }

  run(){
    console.log(this.name + '在奔跑');
  }
}

// 5.export default，有且只有一个
// const address = '北京市';
// export default address;
export default function(argument){
  console.log(argument);
}