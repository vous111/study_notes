// var person={
//     fname : '花花',
//     lname: '王',
//     fullName:function(){
//         console.log(this);
//         return this.lname + this.fname;
//     }
// }
// var get_full_name = person.fullName;
// console.log(get_full_name());
// console.log(person.fullName());

// function User(){
//     console.log(this);
//     this.name = 'whh';
//     this.age = 18;
// }
// // new User();
// var whh = new User();
// console.log(whh);

// function yo() {
//     console.log('Yo, 我是' + this.name);
//   }
//   var whh = {
//     name: 'whh',
//   }
//   var lsd = {
//     name: 'lsd',
//   }
//   whh.yo = yo;
//   lsd.yo = yo;
//   whh.yo();
//   lsd.yo();


// call() /apply() /bind()
// function yo(name){
//     console.log('Yo,' + name + ' 我是' + this.name);
// }
// var whh = {
//     name:'王花花'
// }
// var lsd = {
//     name : '李栓蛋'
// }
// yo.call(whh, 'hello');
// // yo.call(lsd);
// yo.call(lsd, 'world');

// yo.apply(whh, ['hello']);

// yo2 = yo.bind(whh);
// yo2('hello');


// callback
var a = [2, 4, 6, 8];

function each(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    callback(item);
  }
}

each(a, function (item) {
  if (item < 5) {
    console.log(item);
  }
});

each(a, equal2);

function equal2(item) {
  if (item == 2) {
    console.log(item);
  }
} 

