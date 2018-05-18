### San 首页的 hover 动画

---
#### San

A Flexible JavaScript Component Framework

---

在百度前端技术学院学习 设计师学院 绿(大佬)的课程 (第一课QAQ) [传送门](http://ife.baidu.com/course/detail/id/18)

然后模仿san官网的动画效果 [san](https://baidu.github.io/san/)

这是我模仿的效果 [传送们](https://xiaotiandada.github.io/Case/Anime/sanDemo/app/) pc端食用更佳！

大佬的实现已经很棒了 个人只让部分动画变得平滑 比如说鼠标移出的时候增加了

```bash
transition: transform .3s;
```

这样可以让鼠标移出Div的时候更加平滑

分界线～～～

---

首先贴出资料和大佬的教程

* http://ife.baidu.com/course/detail/id/18
* https://zhuanlan.zhihu.com/uxelement
* https://baidu.github.io/san/
* https://github.com/airbnb/lottie-web
* https://codepen.io/airnan/project/editor/ZeNONO/
* https://www.youtube.com/watch?v=5XMUJdjI0L8
* ......

大概就是这么写 大家可以去Google搜教程 官方案例很不错

首先布局 结构和样式都可以借鉴san官网 利用控制台(so easy~)

```bash
<div class="resource-block">
  <a href="" class="resource-item">
    <div class="resource-item-top resource-item-top-two">
        <div
        id="bm"
        class="bodymovin"
        data-movpath="js/compass.json">
      </div>
    </div>

    <div class="resource-item-bottom">
      <h5>教程</h5>
      <p>教程是入门的捷径，请从这里开始了解San</p>
    </div>
  </a>
</div>
```

这是结构 具体样式可以查看我的github文件 [传送门](https://github.com/xiaotiandada/Case/tree/master/Anime)

然后就是js 控制动画效果了

引入jquery (方便～)

* 在github上的build/player获取最新版本的lottie.js文件 或者 从AE的插件导出
* 在HTML引入文件
``` bash
<script src="js/lottie.js"></script>
```
* 调用lottie.loadAnimation()启动一个动画。将一个对象作为参数
```bash
var animData = {
  container: bodymovinLayer,
  renderer: 'svg',
  prerender: true,
  loop: false,
  autoplay: false,
  path: bodymovinLayer.getAttribute('data-movpath')
}

# animData 导出的动画数据的Object
# container 渲染动画的dom元素
# renderer 'svg'/'canvas'/'html'来设置渲染器
# prerender 这个根据英文应该是预渲染
# loop 是否循环播放
# autoplay 是否自动播放
# path 路径


```

* while循环绑定事件 将上面封装进一个方法

```bash
setBodymovin = function (cards, len) {
  while (len--) {
    var bodymovinLayer = cards[len].getElementsByClassName('bodymovin')[0]

    var animData = {
      container: bodymovinLayer,
      renderer: 'svg',
      prerender: true,
      loop: false,
      autoplay: false,
      path: bodymovinLayer.getAttribute('data-movpath')
    }

    anim = lottie.loadAnimation(animData);

    (function (anim) {
      var card = cards[len]

      $(card).on('mouseenter', function () {
        anim.play()
      })

      $(card).on('mouseleave', function (e) {
        anim.stop()
      })
    })(anim)

  }

}
```
* 最后获取元素调用
```bash

var resourceCards = document.querySelectorAll('.resource-block')
var facilityCards = document.querySelectorAll('.facility-block')
var len = resourceCards.length

setBodymovin(resourceCards, len)
setBodymovin(facilityCards, len)

```

最后贴 gulp 任务

```bash
const gulp = require('gulp')
const connect = require('gulp-connect')

gulp.task('connect', function(){
  connect.server({
    root: 'app',
    port: 8000,
    livereload: true
  })
})

gulp.task('html', function(){
  gulp.src('./app/*.html')
    .pipe(connect.reload())
})

gulp.task('css', function(){
  gulp.src('./app/css/*.css')
    .pipe(connect.reload())
})

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html'])
  gulp.watch(['./app/css/*.css'], ['css'])
})

gulp.task('default', ['connect','watch'])
```

具体代码见github源码

大佬多给给意见哦～～～

Qq： 952822399