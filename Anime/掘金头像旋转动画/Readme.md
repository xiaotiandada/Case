
### 掘金头像旋转动画

---

参考文章或者地址

[文章](https://juejin.im/post/5a9bc63f6fb9a028be357720) 

[掘金头像地址](https://juejin.im/user/58ce984d1b69e6006b82ff71)

 [模仿地址](https://xiaotiandada.github.io/Case/Anime/%E6%8E%98%E9%87%91%E5%A4%B4%E5%83%8F%E6%97%8B%E8%BD%AC%E5%8A%A8%E7%94%BB/)

#### 代码实现


``` bash
# 结构
<div class="avatar"></div>
```

``` bash
# 样式
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  background-image: url(https://avatars2.githubusercontent.com/u/24250627?s=460&v=4);
  background-size: cover;
}

.avatar:hover {
  -webkit-transform: rotate(666turn);
  transform: rotate(666turn);
  transition-delay: 1s;
  transition-property: all;
  transition-duration: 59s;
  transition-timing-function: cubic-bezier(.34, 0, .84, 1)
}
```

### 资料参考

[turn](http://www.css88.com/book/css/values/angle/turn.htm)

转、圈（Turns）。一个圆共1圈

90deg = 100grad = 0.25turn ≈ 1.570796326794897rad

资料有兼容说明

Qq: 952822399