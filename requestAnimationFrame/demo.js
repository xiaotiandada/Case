let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

let el = document.querySelector('#box')
let len = 0

const step = timestamp => {
  // console.log('step', timestamp)
  el.style.width = `${len}px`

  if (len < 300) {
    len++
    requestAnimationFrame(step)
  }

}


requestAnimationFrame(step)