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