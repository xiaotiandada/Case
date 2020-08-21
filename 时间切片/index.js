// https://github.com/berwin/Blog/issues/39
// https://github.com/berwin/Blog/issues/38

// let max = 10000
// let i = 0

// console.log('start')

// while (i < max) {
//   console.log(i)
//   i++
// }

// console.log('end')


// const testWorker = new Worker('./worker.js')
// setTimeout(_ => {
//   testWorker.postMessage({})
//   testWorker.onmessage = function(ev) {
//     console.log(ev.data)
//   }
// }, 5000)

// function block () {
//   ts(function* () {
//     const start = performance.now()
//     while (performance.now() - start < 1000) {
//       console.log(11)
//       yield
//     }
//     console.log('done!')
//   })
// }

// function block() {
//   ts(function* () {
//     let max = 1000
//     let i = 0

//     console.log('start')

//     while (i < max) {
//       console.log(i)
//       i++
//       yield
//     }

//     console.log('end')

//   })
// }

// setTimeout(block, 5000)


// function ts(gen) {
//   if (typeof gen === 'function') gen = gen()
//   if (!gen || typeof gen.next !== 'function') return

//   (function next() {
//     const res = gen.next()
//     if (res.done) return
//     setTimeout(next)
//   })()
// }

// function ts (gen) {
//   if (typeof gen === 'function') gen = gen()
//   if (!gen || typeof gen.next !== 'function') return
//   return function next() {
//     const start = performance.now()
//     let res = null
//     do {
//       res = gen.next()
//     } while(!res.done && performance.now() - start < 25);

//     if (res.done) return
//     setTimeout(next)
//   }
// }

// const start = performance.now()
// while (performance.now() - start < 1000) {
//   console.log(11)
// }
// console.log('done!')

// function ts(gen) {
//   if (typeof gen === 'function') gen = gen()
//   if (!gen || typeof gen.next !== 'function') return

//   (function next() {
//     const res = gen.next()
//     if (res.done) return
//     setTimeout(next)
//   })()
// }

function ts (gen) {
  if (typeof gen === 'function') gen = gen()
  if (!gen || typeof gen.next !== 'function') return
  return function next() {
    const start = performance.now()
    let res = null
    do {
      res = gen.next()
    } while(!res.done && performance.now() - start < 25)

    if (res.done) return
    setTimeout(next)
  }
}


// (() => {
//   ts(function* () {
//     const start = performance.now()
//     while (performance.now() - start < 1000) {
//       console.log(11)
//       yield
//     }
//     console.log('done!')
//   })()
// })()

// 1. 127
// 2. 2152

console.log('someThing')

ts(function* () {
  console.time('22')
  for (let i = 0; i < 10000; i++) {
    console.log(22)
    yield
  }
  console.log('done!')
  console.timeEnd('22')
})()


console.log('otherThing')

setTimeout(() => {
  console.log('im setTimeout someThing')
}, 300)

console.log('end someThing')

// 1. 22: 48561.037109375ms
// 2. 22: 1733.631103515625ms