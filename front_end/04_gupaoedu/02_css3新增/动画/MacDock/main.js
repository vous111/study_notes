let box = $("#box")
// console.log(box);
let mouseEnterCss = {'background':'rgba(0,0,0,.25)','transform': 'scale(1.15) translateY(-4px)'}
let mouseLeaveCss = {'background':'rgba(0,0,0,.1)', 'transform': 'scale(1)'}
let mouseEnterNext1Css = {'transform': 'scale(1.08) translateY(-3px)'}
let mouseEnterNext2Css = {'transform': 'scale(1.04) translateY(-2px)'}


box.children('div').hover(e=>{
  // 先清除之前鼠标进入的动画
  $(e.target).css(mouseLeaveCss)
  $(e.target).nextAll().css(mouseLeaveCss)
  $(e.target).prevAll().css(mouseLeaveCss)

  // 再执行鼠标进入的动画
  $(e.target).css(mouseEnterCss)
  $(e.target).next().css(mouseEnterNext1Css)
  $(e.target).prev().css(mouseEnterNext1Css)
  // console.log( $(e.target).nextAll().length);
  let nextAll = $(e.target).nextAll()
  let prevAll = $(e.target).prevAll()
  if (nextAll.length > 1){
    $(nextAll[1]).css(mouseEnterNext2Css)
  }
  if (prevAll.length > 1){
    $(prevAll[1]).css(mouseEnterNext2Css)
  }
})

// 鼠标离开box后再清除子元素的动画
box.mouseleave(()=>{
  box.children('div').css(mouseLeaveCss)
})