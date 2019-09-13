// *********************************************选择器*********************************************
// $(".test").css("color", "#fff");

// $("#bbb").css("color", "#555");

// $('input[type="text"]').css("background","blue");

// *********************************************过滤器*********************************************
// $(".grandpa")
//   .find(".child")
//   .css("border", "2px solid blue");

// $("#child1")
//   .parents(".grandpa")
//   .css("border", "2px solid #333");

// $(".child")
//   .filter(".girl")
//   .css("background", "red");

// $(".child")
//   .parent()
//   .css("background", "gray");

// *********************************************操作样式*********************************************
// var board = $("#board");

// function toggle() {
//   if (board.hasClass("active")) {
//     board.removeClass("active");
//   } else {
//     board.addClass("active");
//   }
// }
// setInterval(toggle, 100);
// 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。

// *********************************************操作DOM*********************************************
// var text=$('.a').text(); // text('AAA')将a中的文字替换
// var html=$('.a').html(); // html指a里面的所有内容
// console.log('text:',text)
// console.log('html:',html)
// $('.a').prepend('<div>prepend</div>');//往前插入元素
// $('.a').append('<div>Append</div>');//往后插入元素
// $('.a span').remove();//删除元素

// *********************************************事件*********************************************
// 事件参考 https://developer.mozilla.org/zh-CN/docs/Web/Events
// var card = $("#card");
// var cardTrigger = $("#card-trigger");

// // cardTrigger.on("click", showOrHide);
// cardTrigger.on("click", slide);
// card.on('mouseenter', addClass);

// function showOrHide() {
//     if (card.is(":visible")) {
//       card.hide();
//     } else {
//       card.show();
//     }
//   }

// function slide() {
// if (card.is(":visible")) {
//     card.slideUp();
// } else {
//     card.slideDown();
//     // card.slideDown();
// }
// }

// function addClass() {
//     $(this).addClass('active');
// }

// *********************************************操作元素属性*********************************************
// $("#a").attr("href", "http://www.biaoyansu.com"); // 修改显性属性
// $("#a").prop("text", "不是百度"); // 修改隐性属性
// var text = $("#a").prop("text"); // 获取属性的值
// console.log("text:", text);
// $("#a").removeAttr("asdf");// 去除属性


// *********************************************表单及输入*********************************************
// var nn = $('#nickname').val('YO');
// $('#nickname').focus();
// $('#nickname').select();
// $('#nickname').blur();

// $('#nickname').focus(function (params) {
//     console.log('Yo.');
// });

// $('#login-trigger').on('click', function(){
//     $('#login').submit();
// });