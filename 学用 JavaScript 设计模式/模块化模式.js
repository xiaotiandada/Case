// 模块

// 模块化模式
// 对象表示法
// AMD模块
// CommonJS 模块
// ECMAScript Harmony 模块




// 对象字面值

let objectModule = {
  name: 'objectModule',
  say: function() {
    console.log(this.name);
  },
  setName: function(name) {
    this.name = name
  }
}


objectModule.say()
console.log(objectModule);

objectModule.setName('update objectModule')

console.log(objectModule);


// 模块化模式
// 私有信息


let testModule = {
  count: 0,

  increment: function() {
    this.count++
  },

  less: function() {
    this.count--
  },

  rest: function() {
    this.count = 0
  }
}

console.log(testModule);

testModule.increment()
testModule.increment()
testModule.increment()

console.log(testModule.count);

testModule.less()

console.log(testModule.count);

testModule.rest()

console.log(testModule.count);



// 下面是一个模板包含了命名空间，公共变量和私有变量。

let myNamespace = (function() {

  // private var
  let myPrivateVar = 0

  // private methods
  let myPrivateMethods = function(foo) {
    console.log(foo, myPrivateVar);
  }

  return {
    myPublishVar : 'foo',
    myPublishFunction: function(bar) {
      // 私有变量
      myPrivateVar++
      // 私有方法
      myPrivateMethods(bar)
    }
  }
})()

console.log(myNamespace);


myNamespace.myPublishFunction('bar')

// 模块中的购物车数组是私有的，应用的其它部分不能直接读取。只存在与模块的闭包中，因此只有可以访问其域的方法可以访问这个变量。

let basketModule = (function() {

  let basket = []

  const doSomethingPrivate = () => {
    console.log('doSomethingPrivate');
  }

  const doSomethingElsePrivate = () => {
    console.log('doSomethingElsePrivate');
  }
  return {

    addItem: function(values) {
      basket.push(values)
    },

    getItemCount: function() {
      return basket.length
    },

    doSomething: doSomethingPrivate(),
    doSomethingElse: doSomethingElsePrivate(),

    getTotal: function() {
      let q = this.getItemCount()
      let p = 0

      while(q--) {
        p += basket[q].price
      }

      return p
    }
  }
})()


console.log('basketModule', basketModule);

basketModule.addItem({
  item: 'bread',
  price: 0.5
})

basketModule.addItem({
  item: 'butter',
  price: 0.3
})

console.log(basketModule.getItemCount());

console.log(basketModule.getTotal());


// 模块模式的变体

// Import mixins(导入混合)

// 这个变体展示了如何将全局（例如 jQuery, Underscore）作为一个参数传入模块的匿名函数。这种方式允许我们导入全局，并且按照我们的想法在本地为这些全局起一个别名。

// Exports（导出）
