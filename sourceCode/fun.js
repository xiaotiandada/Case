'use strict'

// 将一组字符串变成“骆驼”命名法的新字符串，如果该字符已经是“骆驼”命名法，则不变化。
const camelCase = str => {
  return str.replace(/-+(.)?/g, (match, chr) => {
    return chr ? chr.toUpperCase() : ''
  })
}
// console.log(camelCase('hello-world'), camelCase('helloWorld')) // => helloWorld helloWorld


// 检查父节点是否包含给定的dom节点，如果两者是相同的节点，则返回
const contains = document.documentElement.contains ?
  (parent, node) => {
    return parent !== node && parent.contains(node)
  } :
  (parent, node) => {
    while (node && (node === node.parentNode))
      if (node === parent) return true
    return false
  }


// console.log(contains(document.querySelector('#test1'), document.querySelector('#test2')))
// console.log(contains(document.querySelector('#test1'), document.querySelector('#test3')))

// 如果object是array，则返回ture。
const isArray = Array.isArray ||
  function (obj) {
    return obj instanceof Array
  }
// console.log(isArray([1]))

// 自写 非 zepto.js
const isFunction = obj => typeof obj == 'function'

// console.log(isFunction(function () {}))

// 如果该值为有限数值或一个字符串表示的数字，则返回ture。
const isNumeric = val => {
  let num = Number(val),
    type = typeof val
  return (
    (val != null) &&
    (type != 'boolean' &&
      (type != 'string' || val.length) &&
      !isNaN(num) &&
      isFinite(num)) || false
  )
}

// console.log(isNumeric(1), isNumeric('1'))

// 如果object参数为一个window对象，那么返回true。
const isWindow = obj => obj != null & obj == obj.window

// 测试对象是否是“纯粹”的对象，这个对象是通过 对象常量（"{}"） 或者 new Object 创建的，如果是，则返回true。
const isPlainObject = obj => {
  return (
    // 改
    typeof obj == 'object' &&
    !isWindow(obj) &&
    Object.getPrototypeOf(obj) == Object.prototype
  )
}
// console.log(isPlainObject({}))
// console.log(isPlainObject(new Object))
// console.log(isPlainObject(new Date))
// console.log(isPlainObject(window))

const trim = str => str == null ? '' : String.prototype.trim.call(str)

// console.log(trim('1  1   1   '))
// console.log(trim('   1  1   1   '))