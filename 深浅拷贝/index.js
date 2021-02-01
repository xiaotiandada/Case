let data = [1, 2, 3, 4]
let data1 = { a: 1, b: 2, c: 3, d: 4 }
let data2 = [ {a: 1}, { a: 2 }, { a: 3 }, { a: 4 }]
let data3 = { a: { z: 1 }, b: {z : 2}, c: { z: 3 }, d: { z: 4 } }

let shallowCopy = function(obj) {
  if (typeof obj !== 'object') return

  let newObj = obj instanceof Array ? [] : {}
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}


let dataShallowCopy = shallowCopy(data)
let data1ShallowCopy = shallowCopy(data1)

dataShallowCopy[0] = 100
data1ShallowCopy.a = 100

console.log('dataShallowCopy', data, dataShallowCopy)
console.log('data1ShallowCopy', data1, data1ShallowCopy)

let deepCopy = function(obj) {
  if (typeof obj !== 'object') return

  let newObj = obj instanceof Array ? [] : {}
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }

  return newObj
}


let data2DeepCopy = deepCopy(data2)
let data3DeepCopy = deepCopy(data3)

data2DeepCopy[0].a = 100
data3DeepCopy.a.z = 100

console.log('data2DeepCopy', data2, data2DeepCopy)
console.log('data3DeepCopy', data3, data3DeepCopy)
