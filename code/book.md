
// 判断存在于对象/实例 还是在原型中
```js
function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && (name in object)
}
```