# code

一些使 JavaScript 更加简洁的小技巧

```js
{
  // 数组去重
  // 通过使用集合语法和 Spread(展开)运算符，您可以轻松地从数组中删除重复项：
  const removeDuplicateItems = arr => [...new Set(arr)];
  removeDuplicateItems([1, 2, 3, 4, 5, 1, 1, 2, 3, 6, 7, "123", "true", true]);
}

{
  // 平铺多维数组
  // 使用 Spread(展开)，可以很容易去平铺嵌套多维数组：  仅仅适用于二维数组
  const arr = [11, [22, 33], [44, 55], 55, 66];
  const flaArr = [].concat(...arr);
}

{
  // 通过递归，我们可以平铺任意维度的嵌套数组。
  function flattenArray(arr) {
    const flattened = [].concat(...arr);
    return flattened.some(item => Array.isArray(item))
      ? flattenArray(flattened)
      : flattened;
  }
  const arr = [11, [22, 33, 44, [55, 66, [11, 22, 12, 34]], 77], [88, 99], 10];
  const flaArr = flattenArray(arr);
  console.log(flaArr);
}

{
  // 多维数组去重
  function flattenArray(arr) {
    const flattened = [].concat(...arr);
    return flattened.some(item => Array.isArray(item))
      ? flattenArray(flattened)
      : flattened;
  }
  const removeFlattenArray = arr => [...new Set(arr)];
  const arr = [11, [22, 33, 44, [55, 66, [11, 22, 12, 34]], 77], [88, 99], 10];
  const flaArr = flattenArray(arr);
  console.log(removeFlattenArray(flaArr));
}
```

> https://juejin.im/entry/5bd8e8b75188254a267ef788
