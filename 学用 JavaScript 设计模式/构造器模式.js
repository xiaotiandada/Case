// 构造器模式


// 对象创建

// let newObject = {}
// let newObject1 = Object.create(null)
// let newObject2 = new Object()


// console.log('object', newObject);
// console.log('object1', newObject1);
// console.log('object2', newObject2);



// 有四种方式可以将一个键值对赋给一个对象:

let newObject = {}

// .
newObject.some = 'some'

// []
newObject['brackets'] = 'brackets'

// defineProperty
Object.defineProperty(newObject, 'define', {
  value: 'define',
  writable: true,
  enumerable: true,
  configurable: true
})




// function
const defineProp = (obj, key, value) => {
  let config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  }
  Object.defineProperty(obj, key, config)
}


defineProp(newObject, 'defineProp', 'defineProp')

Object.defineProperties(newObject, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false,
    enumerable: true
  },
  'property3': {
    value: 'Hello',
    writable: false,
    enumerable: true,
    configurable: true
  }
});

console.log(newObject);

// 继承
let objChild = Object.create(newObject)
defineProp(objChild, 'child', 'child')

console.log(objChild);
console.log(objChild.some);
console.log(objChild.child);

// 基础构造器

function Car(model, year, miles) {
  this.model = model
  this.year = year
  this.miles = miles


  this.toString = function() {
    return this.model + ' has done ' + this.miles + ' miles'
  }
}

// 使用“原型”的构造器
Car.prototype.all = function() {
  return `${this.model},${this.year},${this.miles}`
}

let carXiao = new Car('xiao', 3, 30000)
let carDa = new Car('da', 2, 500000)

console.log(carXiao.toString())
console.log(carDa.toString())

console.log(carXiao.all())
console.log(carDa.all())



