{
  var arr = [1, 2, 3, 4, 5]

  var it = arr[Symbol.iterator]()
  console.log(it.next())
  console.log(it.next())
  console.log(it.next())
  console.log(it.next())
  console.log(it.next())
  console.log(it.next())

  for (const key of arr) {
    console.log(key)
  }

  console.log(arr.constructor.prototype)

  console.log('----------')


  var obj = {
    a: 1,
    b: 2,
    c: 3
  }

  Object.defineProperty(obj, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function () {
      var index = 0
      var objKes = Object.keys(this)
      return {
        next: () => {
          return {
            value: this[objKes[index++]],
            done: (index > objKes.length)
          }
        }
      }
    }
  })

  for (const key of obj) {
    console.log(key)
  }

  console.log('----------')
}

{
  var obj = {
    data: [1, 2, 3, 5],
    [Symbol.iterator]() {
      const self = this
      let index = 0
      return {
        next() {
          if (index < self.data.length) {
            return {
              value: self.data[index++],
              done: false
            }
          } else {
            return {
              value: undefined,
              done: true
            }
          }
        }
      }
    }
  }

  for (const key of obj) console.log(key)
  console.log('----------')

}

{
  let iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
  }

  for (let item of iterable) console.log(item)
  console.log('----------')

}