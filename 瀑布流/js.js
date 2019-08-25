window.onload = () => {
  initDom()
  setItemDomPosition()
}

window.addEventListener('resize', () => {
  setItemDomPosition()
})

const utils = {
  clientWidth() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
  }
}

let num = 3
let index = 0
let timer = setInterval(() => {
  initDom()
  setItemDomPosition()
  index++
  if (index >= 3) clearInterval(timer)
}, 1000)

let containerDom = document.createElement('div')
containerDom.classList.add('container')

const initDom = () => {
  for (let i = 0; i < 20; i++) {
    let itemDom = document.createElement('div')
    itemDom.classList.add('item')
    itemDom.innerText = i + 1
    itemDom.style.height = (Math.floor(Math.random() * 200)) + 100 + 'px'
    containerDom.appendChild(itemDom)
  }
  document.querySelector('body').appendChild(containerDom)
}

const setItemDomPosition = () => {
  let item = document.querySelectorAll('.item')
  let itemWidth = item[0].offsetWidth
  let gap = 10
  let columns = parseInt(utils.clientWidth().width / (itemWidth + gap))
  let arr = [] // 存储元素的高度

  for (let i = 0; i < item.length; i++) {
    // 前五个
    if (i < columns) {
      item[i].style.top = 0
      item[i].style.left = (itemWidth + gap) * i + 'px'
      arr.push(item[i].offsetHeight)
    } else {
      let index = 0 // 假如最短的高度
      let minHeight = arr[0] // 假如最短的高度

      // 检查最小高度
      for (let j = 0; j < arr.length; j++) {
        if (minHeight > arr[j]) {
          minHeight = arr[j]
          index = j
        }
      }

      item[i].style.top = arr[index] + gap + 'px'
      item[i].style.left = item[index].offsetLeft + 'px'
      // 修改最小高度
      arr[index] = arr[index] + item[i].offsetHeight + gap
    }
  }
}

