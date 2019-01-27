arr = [];
let arr1 = [];

function fun1() {}

console.log(window);
console.log(window.arr);
console.log(arr);

const isArray = value =>
  Object.prototype.toString.call(value) == "[object Array]";

const isFunction = value =>
  Object.prototype.toString.call(value) == "[object Function]";

const isRegExp = value =>
  Object.prototype.toString.call(value) == "[object RegExp]";

console.log(isArray(arr));
console.log(isArray(arr1));
console.log(isFunction(arr1));
console.log(isFunction(fun1));

console.log(isRegExp(arr1));
console.log(isRegExp(new RegExp()));

console.log(Object.prototype.toString.call({ a: 1 }));
