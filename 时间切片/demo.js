let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
                            setTimeout

function ts(gen) {
  if (typeof gen === 'function') gen = gen()
  if (!gen || typeof gen.next !== 'function') return
  return function next() {
    const start = performance.now()
    let res = null
    do {
      res = gen.next()
    } while (!res.done && performance.now() - start < 10)

    if (res.done) return
    requestAnimationFrame(next)
  }
}

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    list: []
  },
  created() {
    this.getData1()
  },
  methods: {
    getData() {
      setTimeout(() => {
        this.list = [...new Array(5000).keys()]
      }, 300)
    },
    getData1() {
      console.log('start')
      setTimeout(() => {
        let list = [...new Array(5000).keys()]
        console.log('ts', ts)
        const _this = this
        console.log('request end')
        ts(function* () {
        console.log('start push')
          for (let i = 0, len = list.length; i < len; i++) {
            _this.list.push(list[i])
            console.log('list')
            yield
          }
          console.log('done')
        })()

      }, 300)
      console.log('other work')

    }
  }
})