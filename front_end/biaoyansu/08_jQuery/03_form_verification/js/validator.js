$(function() {
  "use strict";

  //   rule = {
  //       max:100,
  //       min:10,
  //   }
  window.Validator = function(val, rule) {
    this.is_valid = function(new_val) {
      var key;
      if (new_val!==undefined)
        val = new_val;
      // 如果不是必填项且用户未填写任何内容，则直接判定为合法
      if (!rule.required && !val) return true;

      for (key in rule) {
        if (key === "required") continue;
        var r = this['validate_' + key]();
        if (!r) return false;
      }
      return true;
    };

    this.validate_max = function() {
      pre_max_min();
      if (val <= rule["max"]) {
        return true;
      }
      return false;
    };
    this.validate_min = function() {
      pre_max_min();
      if (val >= rule["min"]) {
        return true;
      }
      return false;
    };
    this.validate_minlength = function() {
      pre_length();
      if (val.length >= rule["minlength"]) {
        return true;
      }
      return false;
    };
    this.validate_maxlength = function() {
      pre_length();
      if (val.length <= rule["maxlength"]) {
        return true;
      }
      return false;
    };
    this.validate_numeric = function() {
      return $.isNumeric(val); // 判断是否为数字
    };
    this.validate_required = function() {
      if (!val && val !== 0) {
        return false;
      }
      return true;
    };
    this.validate_pattern = function() {
      var reg = new RegExp(rule.pattern); //生成正则对象
      return reg.test(val); //触发正则，测试val是否是否匹配
    };

    // 用于完成this.validate_max或者this.validate_min的前置工作
    function pre_max_min() {
      val = parseFloat(val); //函数可解析一个字符串，并返回一个浮点数
    }
    // 用于完成this.validate_max或者this.validate_min的前置工作
    function pre_length() {
      val = val.toString();
    }
  };
});
