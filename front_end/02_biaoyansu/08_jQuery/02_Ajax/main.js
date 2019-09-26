// *********************************************load*********************************************

// var trigger = $("#trigger");
// var card = $("#card");
// var loaded = false;

// trigger.on("click", function() {
//   if (card.is(":visible")) {
//     card.slideUp();
//   } else {
//       if(!loaded){
//         card.load("card.html");
//         loaded = true;
//       }
//       card.slideDown();
//   }
// });

// trigger.on("mouseover", function() {
//       if(!loaded){
//         card.load("card.html");
//         loaded = true;
//       }
//       card.slideDown(200);
// });

// trigger.on("mouseleave", function() {
//     card.slideUp(200);
// });

// *********************************************Ajax*********************************************
// $.ajax('http://api.github.com/users/biaoyansu').done(function(data){
//     console.log(data)
// })

var form = $("#search");
var input = $("input#username");
var button = $("#sub");
var result = $("#result");
var username;
button.on("click", function() {
  form.on("submit", function(event) {
    event.preventDefault();
    username = input.val();
    $.ajax("http://api.github.com/users/" + username).done(function(data) {
      var html =
        "<div>用户名：" +
        data.login +
        "</div>" +
        "<div>介绍：" +
        // (data.bio||'无') +
        (data.bio?data.bio:'无') +
        "</div>";
      result.html(html);
    });
  });
});

// $.ajax("http://api.github.com/users111/biaoyansu", {
//   // url:'url',
//   method: "get",
//   data: {
//     username: "whh",
//     password: "asdf"
//   },
//   success: function(data) {
//     console.log("成功");
//     console.log(data);
//   },
//   error: function() {
//     console.log("失败");
//   }
// });

// $.post("url", {
//   username: "...",
//   password: "..."
// });
// $.get("url");
// $.getJson('url');
// $.getScript('url');
