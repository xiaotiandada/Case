// https://github.com/mqyqingfeng/Blog/issues/109

// log
function log(target: any, name: string, descriptor: PropertyDecorator) {
  let method = descriptor.value

  descriptor.value = (...args) => {
    let ret
    try {
      ret = method.apply(this, args)
      console.log('success s')
    } catch (error) {
      console.log(error)
    }
    return ret
  }

  return descriptor
}


class Utils {

  @log
  add(a: number, b: number) {
    return a + b;                         
  }
}


const utils = new Utils()
console.log(utils.add(2,4))

// debounce

function _debounce(fn: any, wait: number) {
  let timeout: any = null
  
  return function(...args: any) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, ...args)
    }, wait)
  }
}

function debounce(wait: number) {
  return function(target: any, name: string, descriptor: PropertyDecorator) {
    const callback = descriptor.value

    if (typeof callback !== 'function') {
      throw new SyntaxError('Only functions can be debounce')
    }

    let fn = _debounce(callback, wait)

    return {
      ...descriptor,
      value() {
        fn()
      }
    }
  }
}




class EventInit {

  @debounce(300)
  scrollFn() {
    console.log(111)
  }

  scroll() {
    window.addEventListener('scroll', this.scrollFn)
  }
}

const eventInit = new EventInit()
eventInit.scroll()

// time


function timeFn(prefix: string) {
  let count: number = 0
  return (target: any, name: string, descriptor: PropertyDecorator) => {
    let fn = descriptor.value

    return {
      ...descriptor,
      value(...args: any) {
        let label = `${prefix}-${count}`
        count++
        console.time(`${label}`)
        try {
          return fn.apply(this, args)
        } catch (e) {
          console.error(e)
        } finally {
          console.timeEnd(`${label}`)
        }
      }
    }
  }
}

const sleep = (time: number) => new Promise((reject: any) => setTimeout(reject, time))

class Time {

  @timeFn('count')
  async timeCount() {
    console.log('timeCount...')
    await sleep(2000)
    console.log('timeCount')
  }
}


const time = new Time()
time.timeCount()


// mixin

function mixin(...mixins) {
  return target => {
    if (!mixins.length) {
      throw new SyntaxError('mixin error')
    }

    for (let i = 0, l = mixins.length; i < l; i++) {
      const descs = Object.getOwnPropertyDescriptors(mixins[i])
      const keys = Object.getOwnPropertyNames(descs)

      for (let j = 0, k = keys.length; j < k; j++) {
        const key = keys[j]

        if (!target.prototype.hasOwnProperty(key)) {
          Object.defineProperty(target.prototype, key, descs[key]);
        }
      }
    }
  }
}

const SingMinin = {
  sing(sound) {
    alert(sound)
  }
}

@mixin(SingMinin)
class Bird {
  singMatingCall() {
    this.sing('tweet tweet')
  }
}

const bird = new Bird()
// bird.singMatingCall()

// redux???
// 尝试未果 还不熟