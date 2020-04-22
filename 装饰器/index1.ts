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