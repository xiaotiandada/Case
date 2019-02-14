{
  // 去重
  const setArr = arr => [...new Set(arr)];
  console.log(setArr([1, 2, 3, 2, 3, 4, 1, 6, 4, 5, 6, 7, 8]));
}

{
  // 平铺二维数组
  const repeta = arr => [].concat(...arr);
  console.log(repeta([1, 2, 3, [1, 2]]));
}

{
  // 平铺多维数组

  const repetas = arr => {
    const repeta = [].concat(...arr);

    return repeta.some(item => Array.isArray(item)) ? repetas(repeta) : repeta;
  };

  console.log(repetas([1, 2, [2, 3], 3, [1, 2, 3, [3, 2, [5, 6], 1], 3], 4]));
}

{
  // 多维数组去重
  const setArr = arr => [...new Set(arr)];

  const repetas = arr => {
    const repeta = [].concat(...arr);
    return repeta.some(item => Array.isArray(item)) ? repetas(repeta) : repeta;
  };
  let repetasArr = repetas([
    1,
    2,
    [2, 3],
    3,
    [1, 2, 3, [3, 2, [5, 6], 1], 3],
    4
  ]);
  console.log(setArr(repetasArr));
}
