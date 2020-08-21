self.onmessage = function() {
  const start = performance.now()
  // while (performance.now() - start < 1000) { }

  // let max = 10000
  // let i = 0

  // console.log('start')

  // while (i < max) {
  //   console.log(i)
  //   i++
  // }

  // console.log('end')

  
  postMessage('done')
}