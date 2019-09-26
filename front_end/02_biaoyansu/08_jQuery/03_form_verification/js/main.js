$(function() {
  "use strict";

  // 1.选中页面中所有的input[data-rule]
  var $inputs = $("[data-rule]"),
    $form = $("#signup"),
    inputs = [];

  $inputs.each(function(index, node) {
    var tmp = new Input(node);//选择器也可以放原生的node对象
    inputs.push(tmp);
  });

  // 2.解析每一个input的验证规则

  // 3.验证

  $form.on("submit", function(e) {
    e.preventDefault();
    $inputs.trigger('blur')//触发blur事件，即用户离开input输入框
    for (var i = 0;i<inputs.length;i++){
      var item = inputs[i];
      var r = item.validator.is_valid();
      if (!r){
        alert('invalid');
        return
      }
    }
    alert('注册成功');
  });

  function signup(){
    // $.post();
  }
});
