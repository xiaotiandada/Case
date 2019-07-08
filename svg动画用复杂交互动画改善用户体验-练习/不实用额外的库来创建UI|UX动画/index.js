window.onload = function() {
  let magnifier = document.querySelector('.magnifier')
  let main = document.querySelector('.main')
  let line = document.querySelector('.line')
  magnifier.onclick = function() {
    let hasOpen = magnifier.classList.contains('open')
    console.log(hasOpen)
    if (hasOpen) {
      magnifier.classList.remove('open')
      main.classList.remove('open')
      line.classList.remove('open')
    } else {
      magnifier.classList.add('open')
      main.classList.add('open')
      line.classList.add('open')
    }
  }
}