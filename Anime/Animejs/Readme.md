```css
.box {
  width: 50px;
  height: 150px;
}

.boxes {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.boxes__inner {
  display: flex;
  overflow: hidden;
  height: 165px;
}
```

``` html
<div class="boxes">
    <div class="boxes__inner">
      <div class="box js-box"></div>
      <div class="box js-box"></div>
      <div class="box js-box"></div>
      <div class="box js-box"></div>
      <div class="box js-box"></div>
      <div class="box js-box"></div>
      <div class="box js-box"></div>
      <div class="box js-box"></div>
      <div class="box js-box"></div>
      <div class="box js-box"></div>
      <div class="box js-box"></div>
    </div>
  </div>
```
  
```js
  const boxAnimation = anime({
  targets: '.js-box',
  translateY: [150, 50],
  backgroundColor: {
    value: (el, i, t) => {
      const r = 58 + (i * 12);
      const g = 35 + (i * 12);
      const b = 220;
      const color = `rgb(${r}, ${g}, ${b})`;
      return color;
    },
    easing: 'linear',
    duration: 200,
  },
  duration: 900,
  easing: 'easeOutElastic',
  elasticity: 500,
  delay: (el, i, t) => i * 20,
  loop: true,
  direction: 'alternate',
});

boxAnimation()

// 引入anime.js cdn
```
