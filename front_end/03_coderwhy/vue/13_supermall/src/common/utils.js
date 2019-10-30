export function debounce(func, dalay = 500) {
  let timer = null;
  // ...args接收数组
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, dalay);
    // 关于apply方法: https://www.cnblogs.com/xiaohongwu/archive/2011/06/15/2081237.html
  };
}

export function formatDate(date, fmt) {
  // 语法：regexObj.test(str)
  // 参数是一个字符串类型的值，返回true或者false，如果匹配返回true，否则返回false。

  // y+ -> 1个或多个y
  // y* -> 0个或多个y
  // y? -> 0或1个y

  // /(y+)/这是一个正则表达式
  // $1 第一个匹配分组内的内容
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }

  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (let k in o) {
    // `123${k}`:123M+, 123d+  ${}：在字符中嵌入表达式
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ""; // 将o[k]转化为字符串
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
