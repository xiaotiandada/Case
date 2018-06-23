// 获取变量
var box = $('.box'),
    imgBox = $('.imgBox'),
    handle = $('.handle'),
    swiper = $('.swiper'),
    text = $('.text'),
    verify = $('.verify'),
    verifyed = $('.verifyed'),
    refresh = $('.refresh'),
    len = 5


// img集合
var imgs = []
for (let i = 0; i <= len; i++) {
  imgs.push('' + i + i)
  console.log(imgs)
}

$(function(){
  // 随机添加背景图
  refreshImg()

  // 随机切换背景图片
  refresh.click(function(event){
    e = event || window.event
    e.stopPropagation()

    // 随机添加背景图
    refreshImg()
    start()

    // 拼图块
  })

  refresh.mousedown(function(){
    $(this).addClass('click')
  })
  refresh.mouseup(function(){
    $(this).removeClass('click')
  })

  window.onload = start()  
})

function start(){
  var verImg = $('.verImg')[0]
  console.log(verImg);
  
  if(verImg){
    verImg.onload = function(){
      // 获取图片高
      var imgH = this.clientHeight
      console.log(imgH)
      // 随机生成坐标 图片框宽度300px 高度不定  中间往右
      var verX = 150 * (1 + Math.random()) - 38
      var verY = imgH / 4 + Math.random() * imgH / 2
      console.log(verX,verY)

      // 移动滑块
      fnDown(verX,verY)
    }
  }
}

/**
 * 移动滑块
 * @param {*} verX 
 * @param {*} verY 
 */
function fnDown(verX,verY){
  swiper.mousedown(function(e){
    e = event || window.event
    e.stopPropagation()

    verify.css({
      'display' : 'block',
      'top'     : `${verY}px`,
      'background-position' : `-${verX}px -${verY}px`
    })
    verifyed.css({
      'display' : 'block',
      'left'    : `${verX}px`,
      'top'     : `${verY}px`
    })

    // 获取鼠标到按钮的距离
    var disX = e.clientX - $(this).offset().left
    var disY = e.clientY - $(this).offset().top
    text.css('opacity','0')
    console.log(disX,disY)

    // 防止多次触发
    box.unbind('mousemove')
    box.unbind('mouseup')

    // 移动
    box.bind('mousemove',function(event){
      e = event || window.event
      // 拖动
      fnMove(e, disX, disY)
    })

    // 释放
    box.bind('mouseup',function(){
      var stopL = verify.offset().left - 28

      // 误差2px
      if (Math.abs(stopL - verX) > 2){
        alert('失败')
      }else{
        alert('成功')
      }

      // 接触绑定 滑块归位
      box.unbind('mousemove')
      swiper.css('left','0px')
      verify.css('left','10px')
      text.css('opacity','1')
      box.unbind('mouseup')
    })
  })
}

function fnMove(e, posX, posY){
  var l = e.clientX - posX - $(handle).offset().left
  // 圆的一半
  var winW = $(handle).width() + 29

  // 限制拖动范围
  if(l < 0){
    l = 0
  } else if (l > winW){
    l = winW
  }

  swiper.css({
    'left': `${l}px`
  })
  verify.css({
    'left' : `${l + 10}px`
  })

}

/**
 * 添加随机img
 */
function refreshImg(){
  
  // 随机生成下标
  var index = Math.round(Math.random() * len)
  var imgH = 0

  // 显示两张img
  verify.hide()
  verifyed.hide()

  // 添加img
  var verImg = $('.verImg')

  if(verImg.length){
    console.log(verImg)
    verImg.attr('src',`imgs/${imgs[index]}.jpg`)
  } else{
    imgBox.prepend(`<img class="verImg" src="imgs/${imgs[index]}.jpg" />`)
  }
  verify.css('background-image',`url('imgs/${imgs[index]}.jpg')`)
  console.log(imgs[index])
}