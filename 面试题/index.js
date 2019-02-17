{
  // 数组随机排序

  let arr = [1, 2, 3, 4, 5, 6, 7];

  const randSort = arr => {
    arr.map((item, i) => {
      let rand = Math.floor(Math.random() * i);
      let temp = arr[rand];
      arr[rand] = arr[i];
      arr[i] = temp;
    });
    return arr;
  };

  // console.log(randSort(arr));
}

{
  // 数组随机排序
  let arr = [1, 2, 3, 4, 5, 6, 7];
  const randSort = arr => arr.sort(() => Math.random() - 0.5);
  // console.log(randSort(arr));
}

{
  // Javascript如何实现继承？
  function Parent() {
    this.name = "parent";
  }
  function Child() {
    this.age = 19;
  }

  // //继承了Parent，通过原型
  Child.prototype = new Parent();
  let parent = new Parent();
  let child = new Child();
  console.log(parent.name);
  console.log(parent.age);
  console.log(child.name);
  console.log(child.age);
}
