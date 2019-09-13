$(function() {
  "use strict";

  window.Input = function(selector) {
    var $ele, $error_ele;
    var rule = { required: true };
    var me = this;

    this.load_validator = function() {
      var val = this.get_val(); //返回被选择元素的值
      this.validator = new Validator(val, rule);
    };

    this.get_val = function() {
      return $ele.val();
    };

    function init() {
      find_ele();
      get_error_ele();
      parse_rule();
      me.load_validator();
      listen();
    }

    function listen() {
      // $ele.on('change',function(){
      $ele.on("blur", function() {
        var valid = me.validator.is_valid(me.get_val());
        if (valid) {
          $error_ele.hide();
        } else {
          $error_ele.show();
        }
      });
    }

    function find_ele() {
      if (selector instanceof $) {
        $ele = selector;
      } else {
        $ele = $(selector);
      }
    }

    function get_error_ele() {
      $error_ele = $(get_error_selector());
    }
    function get_error_selector() {
      return "#" + $ele.attr("name") + "-input-error";
    }

    function parse_rule() {
      var rule_srting = $ele.data("rule"); // $().data()获取data_()属性
      if (!rule_srting) {
        return;
      }
      // "min:18|maxlength:10"
      var rule_arr = rule_srting.split("|"); // ['min:18','maxlength:10']
      for (var i = 0; i < rule_arr.length; i++) {
        var item = rule_arr[i];
        var item_arr = item.split(":"); // ['min','18']
        rule[item_arr[0]] = JSON.parse(item_arr[1]); //{min:18}
      }
    }

    init();
  };
});
