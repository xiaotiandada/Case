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


