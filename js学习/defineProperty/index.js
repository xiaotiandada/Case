{
  let targetDom = document.querySelector('#box')

  Object.defineProperty(targetDom, 'translateX', {
    set: function (value) {
      let transformText = `translateX(${value}px)`
      targetDom.style.transform = transformText
    }
  })

  const sleep = time => new Promise(reslove => setTimeout(reslove, time))

  async function start() {
    await sleep(500)
    targetDom.translateX = 30
    await sleep(500)
    targetDom.translateX = 300
    await sleep(500)
    targetDom.translateX = 0
  }

  // start()
}

{
  var person = {}
  var str = '123'
  Object.defineProperty(person, 'val', {
    set: val => {
      str = val
    },
    get: () => {
      return str
    }
  })

  console.log(str)
  person.val = 'xiao'
  console.log(str)

}