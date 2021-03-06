### 为什么你应该在相等比较中使用 Object.is()

> JavaScript 中一个很棒的相等比较解决方案

```js
Object.is(?,?)
```

> http://www.jstips.co/zh_cn/javascript/why-you-should-use-Object.is()-in-equality-comparison/

### 循环数组

> 循环数组 在 Javascript 中有几种循环数组的方法。我们将从经典的那些开始，并逐步向标准添加。

```js
{
  // while
  let index = 0;
  const array = [1, 2, 3, 4, 5, 6];

  while (index < array.length) {
    console.log(array[index]);
    index++;
  }
}

{
  // for (classical)
  const array = [1, 2, 3, 4, 5, 6];
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }

  {
    // forEach
    const array = [1, 2, 3, 4, 5, 6];

    array.forEach(function(current_value, index, array) {
      console.log(
        `At index ${index} in array ${array} the value is ${current_value}`
      );
    });
    // => undefined
  }
}

{
  // map
  const array = [1, 2, 3, 4, 5, 6];
  const square = x => Math.pow(x, 2);
  const squares = array.map(square);
  console.log(`Original array: ${array}`);
  console.log(`Squared array: ${squares}`);
}

{
  // reduce
  const array = [1, 2, 3, 4, 5, 6];
  const sum = (x, y) => x + y;
  const array_sum = array.reduce(sum, 0);
  console.log(`The sum of array: ${array} is ${array_sum}`);
}

{
  // filter
  const array = [1, 2, 3, 4, 5, 6];
  const even = x => x % 2 === 0;
  const even_array = array.filter(even);
  console.log(`Even numbers in array ${array}: ${even_array}`);
}

{
  // every
  const array = [1, 2, 3, 4, 5, 6];
  const under_seven = x => x < 7;

  if (array.every(under_seven)) {
    console.log("Every element in the array is less than 7");
  } else {
    console.log("At least one element in the array was bigger than 7");
  }
}

{
  // some
  const array = [1, 2, 3, 9, 5, 6, 4];
  const over_seven = x => x > 7;

  if (array.some(over_seven)) {
    console.log("At least one element bigger than 7 was found");
  } else {
    console.log("No element bigger than 7 was found");
  }
}
```

> http://www.jstips.co/en/javascript/looping-over-arrays/

### Array 的三个技巧

> 在 JavaScript 中 数组（Array）随处可见，使用 ECMAScript 6 中的新特性 扩展运算符 你可以做很多很棒事情。在这边文章中，我将为你介绍在编码中有用的 3 个技巧。

```js
// 1. 迭代一个空数组

{
  const arr = new Array(4);
  [undefined, undefined, undefined, undefined];
}
{
  const arr = new Array(4);
  arr.map((elem, index) => index);
  [undefined, undefined, undefined, undefined];
}

{
  // 创建新数组的时候使用 Array.apply。
  const arr = Array.apply(null, new Array(4));
  arr.map((elem, index) => index);
  [0, 1, 2, 3];
}

// 2. 给方法传一个空参数

{
  method('parameter1', , 'parameter3');
// Uncaught SyntaxError: Unexpected token ,
}

{
  // 一个人们常用的解决方法是传递 null 或 undefined.
  method('parameter1', null, 'parameter3') // or
  method('parameter1', undefined, 'parameter3');
}

{
  // 根据 ES6 中对扩展运算符的介绍，有一个更简洁的方法可以将空参数传递给一个方法。
  method(...['parameter1', , 'parameter3']); // works!
}

{
  // 数组去重
  const arr = [...new Set([1, 2, 3, 3])];
  [1, 2, 3]
}
```

> http://www.jstips.co/zh_cn/javascript/3-array-hacks/

### 循环内部的闭包

```js
{
  var funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs[i] = function() {
      console.log("i value is" + i);
    };
  }

  for (var i = 0; i < 3; i++) {
    funcs[i]();
  }
}

{
  for (var i = 0; i < 3; i++) {
    funcs[i] = (function(value) {
      console.log("i value is " + 3);
    })(i);
  }
}

{
  for (let i = 0; i < 3; i++) {
    funcs[i] = function() {
      console.log("i value is " + 3);
    };
  }
}
```

> http://www.jstips.co/en/javascript/closures-inside-loops/

### 哈希映射没有副作用

> 如果要将 javascript 对象用作哈希映射（纯粹用于存储数据），则可能需要按如下方式创建它。

```js
 const map = Object.create(null);

//  使用object literal（const map = {}）创建地图时，默认情况下，地图会从Object继承属性。它相当于Object.create(Object.prototype)。

// 但通过这样做Object.create(null)，我们明确指定null为其原型。因此它绝对没有属性，甚至没有构造函数，toString，hasOwnProperty等等。因此，如果需要，您可以在数据结构中自由使用这些键。

const dirtyMap = {};
const cleanMap = Object.create(null);

dirtyMap.constructor    // function Object() { [native code] }

cleanMap.constructor    // undefined

// Iterating maps

const key;
for(key in dirtyMap){
  if (dirtyMap.hasOwnProperty(key)) {   // Check to avoid iterating over inherited properties.
    console.log(key + " -> " + dirtyMap[key]);
  }
}

for(key in cleanMap){
  console.log(key + " -> " + cleanMap[key]);    // No need to add extra checks, as the object will always be clean
}
```

<!-- Notes: -->
<!-- Object.create() was introduced in ES5: Compatibility -->
<!-- ES6 introduced some new structures: Map, WeakMap, Set and Weak Set -->

> http://www.jstips.co/en/javascript/hash-maps-without-side-effects/

### 三个实用的 javascript 小技巧

```js
{
  // 从后向前获取数组元素
  // 如果你想从后向前获取一个数组的元素，可以这样写：
  var newArray = [1, 2, 3, 4];

  console.log(newArray.slice(-1)); // [4]
  console.log(newArray.slice(-2)); // [3, 4]
  console.log(newArray.slice(-3)); // [2, 3, 4]
  console.log(newArray.slice(-4)); // [1, 2, 3, 4]
}
{
  // 短路条件句
  // 如果你想在某个条件逻辑值为true时，执行某个函数，就像这样：

  if (condition) {
    dosomething();
  }
  condition && dosomething();
}

{
  // 用操作符 “||” 来设置默认值
  // 如果你必须给一个变量赋默认值，可以简单的这样写：

  var a;

  console.log(a); // undefined

  a = a || "default value";

  console.log(a); // default value

  a = a || "new value";

  console.log(a); // default value
}
```

> http://www.jstips.co/zh_cn/javascript/three-useful-hacks/
