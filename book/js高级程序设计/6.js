{
  var person = {};
  Object.defineProperty(person, "name", {
    writable: true,
    value: "Xiao"
  });

  // console.log(person.name);
  // person.name = 's'
  // console.log(person.name);

  var book = {
    _year: 2004,
    edition: 1
  };

  Object.defineProperty(book, "year", {
    get: function () {
      return this._year;
    },

    set: function (newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
      }
    }
  });

  // book.year = 2005
  // console.log(book.edition);
}

// -------------------

{
  // 工厂模式
  function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
      console.log(this.name);
    };
    return o;
  }

  var person1 = createPerson("xiao", 19, "frontEnd");
  var person2 = createPerson("lei", 19, "backEnd");

  // console.log(person1);
  // console.log(person2);
}

{
  // 构造函数模式

  function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
      console.log(this.name);
    };
  }

  var person1 = new Person("xiao", 19, "frontEnd");
  var person2 = new Person("lei", 20, "backEnd");

  // console.log(person1);
  // console.log(person2);

  // person1.sayName()
  // person2.sayName()

  // console.log(person1.constructor == Person);
  // console.log(person2.constructor == Person);

  // console.log(person1 instanceof Person);
  // console.log(person1 instanceof Object);
  // console.log(person2 instanceof Person);
  // console.log(person1 instanceof Object);
}

{
  // 构造函数模式

  function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
  }

  function sayName() {
    console.log(this.name);
  }

  var person1 = new Person("xiao", 19, "frontEnd");
  var person2 = new Person("lei", 20, "backEnd");

  // console.log(person1);
  // console.log(person2);

  // person1.sayName()
  // person2.sayName()

  // console.log(person1.constructor == Person);
  // console.log(person2.constructor == Person);

  // console.log(person1 instanceof Person);
  // console.log(person1 instanceof Object);
  // console.log(person2 instanceof Person);
  // console.log(person1 instanceof Object);
}

{
  // 原型模式
  function Person() {}
  Person.prototype.name = 'xiao',
    Person.prototype.age = 19,
    Person.prototype.sayName = function () {
      console.log(this.name);
    }

  // var person1 = new Person()
  // person1.sayName()

  // var person2 = new Person()
  // person2.sayName()

  // person1.name = 'lei'
  // person1.sayName()
  // person2.sayName()



  // console.log(person1.hasOwnProperty('name'))
  // console.log(person2.hasOwnProperty('name'))

  // delete person1.name
  // person1.sayName()
  // person2.sayName()

  // function hasPrototypeProperty(object, name) {
  //   return !object.hasOwnProperty(name) && (name in object)
  // }

  // console.log(hasPrototypeProperty(person1, 'name'));
  // person1.name = 'lei'
  // console.log(hasPrototypeProperty(person1, 'name'));

  // var keys = Object.keys(Person.prototype)
  // console.log(keys);
  // console.log(Object.getOwnPropertyNames(Person.prototype));
  // person1.name = 'lei'
  // person1.age = 19
  // console.log(Object.keys(person1));
  // console.log(Object.getOwnPropertyNames(person1));

}

{
  function Person() {}
  Person.prototype = {
    name: 'xiao',
    age: 19,
    sayName: function () {
      console.log(this.name);
    }
  }

  // var person = new Person()
  // console.log(person instanceof Person);
  // console.log(person instanceof Object);
  // console.log(person.constructor == Person);
  // console.log(person.constructor == Object);
}

{
  function Person() {}
  Person.prototype = {
    constructor: Person,
    name: 'xiao',
    age: 19,
    sayName: function () {
      console.log(this.name);
    }
  }

  // var person = new Person()
  // console.log(person instanceof Person);
  // console.log(person instanceof Object);
  // console.log(person.constructor == Person);
  // console.log(person.constructor == Object);
}

{
  function Person() {}
  Person.prototype = {
    constructor: Person,
    name: 'xiao',
    age: 19,
    sayName: function () {
      console.log(this.name);
    }
  }

  var person = new Person()
  Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
  })
}

{
  function Person() {}
  Person.prototype.arr = ['1', '2', '3']
  var person1 = new Person()
  var person2 = new Person()
  // person1.arr.push('4')
  // console.log(person1.arr)
  // console.log(person2.arr)
}

{
  function Person(name) {
    this.name = name
  }
  Person.prototype = {
    constructor: Person,
    sayName: function () {
      console.log(this.name)
    }
  }

  var person1 = new Person('xiao')
  var person2 = new Person('lei')

  // console.log(person1.name == person2.name)
  // console.log(person1.sayName == person2.sayName);
  // console.log(person1.constructor == person2.constructor);
  // console.log(person1.constructor == Person);
}

{
  function Person(name) {
    this.name = name
  }
  if (typeof this.sayName != 'function') {
    Person.prototype.sayName = function () {
      console.log(this.name);
    }
  }

  var person1 = new Person('xiao')
  // person1.sayName()
}

{
  function SpecialArray() {
    var values = new Array()

    values.push.apply(values, arguments)

    values.toPiedString = function () {
      return this.join('|')
    }
    return values
  }

  var colors = new SpecialArray('yellow', 'red', 'green')
  // console.log(colors.toPiedString());
}

{
  function Person(name) {
    var o = new Object()
    o.sayName = function () {
      console.log(name);
    }
    return o
  }
  var person1 = Person('xioa')
  // person1.sayName()
}

{
  function SuperType() {
    this.property = true
  }
  SuperType.prototype.getSuperValue = function () {
    return this.property
  }

  function SubType() {
    this.subproperty = false
  }

  // 继承了
  SubType.prototype = new SuperType()

  SubType.prototype.getSubValue = function () {
    return this.subproperty
  }

  var instance = new SubType()
  // console.log(instance.getSuperValue())
  // console.log(instance.getSubValue())

  // console.log(instance instanceof Object);
  // console.log(instance instanceof SubType);
  // console.log(instance instanceof SuperType);


  // console.log(Object.prototype.isPrototypeOf(instance));
  // console.log(SubType.prototype.isPrototypeOf(instance));
  // console.log(SuperType.prototype.isPrototypeOf(instance));
}

{
  function SuperType() {
    this.colors = ['red', 'yeelow']
  }

  function SubType() {}

  SubType.prototype = new SuperType()

  var instance1 = new SubType()
  instance1.colors.push('green')
  // console.log(instance1.colors);

  var instance2 = new SubType()
  // console.log(instance2.colors);
}

{
  function SuperType(name) {
    this.name = name
  }

  function SubType() {
    SuperType.call(this, 'xiao')
    this.age = 19
  }

  var instance = new SubType()
  // console.log(instance.name)
  // console.log(instance.age)
}

{
  function SuperType(name) {
    this.name = name
    this.colors = ['red', 'yellow']
  }

  SuperType.prototype.sayName = function () {
    console.log(this.name);
  }

  function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
  }

  SubType.prototype = new SuperType()
  SubType.prototype.constructor = SuperType

  SubType.prototype.sayAge = function () {
    console.log(this.age);
  }

  //   var instance = new SubType('xiao', 19)
  //   instance.colors.push('green')
  //   instance.sayName()
  //   instance.sayAge()
  //   console.log(instance.colors)


  //   var instance2 = new SubType('lei', 20)
  //  instance2.sayName()
  //  instance2.sayAge()
  //   console.log(instance2.colors);

}

{
  function object(o) {
    function F() {}
    F.prototype = o
    return new F()
  }

  var person = {
    name: 'xiao',
    colors: ['red', 'yellow']
  }

  // var instance = object(person)
  // instance.name = 'lei'
  // instance.colors.push('green')
  // console.log(person.name);
  // var instance2 = object(person)
  // instance2.name = '12'
  // instance2.colors.push('gary')
  // console.log(person.name);
  // console.log(person.colors);
}

{
  function object(o) {
    function F() {}
    F.prototype = o
    return new F()
  }

  var person = {
    name: 'xiao',
    colors: ['red', 'yellow']
  }

  // var instance = Object.create(person)
  // instance.name = 'lei'
  // instance.colors.push('green')
  // console.log(person.name);
  // var instance2 = object(person)
  // instance2.name = '12'
  // instance2.colors.push('gary')
  // console.log(person.name);
  // console.log(person.colors);
}

{
  var person = {
    name: 'xiao',
    color: ['red', 'yellow']
  }

  var instance = Object.create(person, {
    name: {
      value: 'xiao'
    }
  })

  // console.log(instance.name);
}

{
  function createAnother(original) {
    var clone = Object.create(original)
    clone.sayHi = function () {
      console.log('hi');
    }
    return clone
  }

  var person = {
    name: 'xiao'
  }

  var instance = createAnother(person)
  // instance.sayHi()
  // console.log(instance.name);
}

{
  function inheritPrototype(SubType, SuperType) {
    var clone = Object.create(SuperType.prototype)
    clone.constructor = SubType
    SubType.prototype = clone
  }

  function SuperType(name) {
    this.name = name
  }
  SuperType.prototype.sayName = function () {
    console.log(this.name);
  }

  function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
  }
  // SubType.prototype = new SuperType()

  inheritPrototype(SubType, SuperType)

  SubType.prototype.sayAge = function () {
    console.log(this.age);
  }

  SubType.prototype.test = 'test';


  // var instance = new SubType('xiao', 19)
  // instance.sayName()
  // console.log(instance.name);
  // console.log(instance.age);
  // console.log(instance.test);
  // instance.sayAge()

}

{
  function factorial(num) {
    if (num <= 1) {
      return 1
    } else {
      return num * factorial(num - 1)
    }
  }
  //  console.log( factorial(5))
}

{
  function factorial(num) {
    if (num <= 1) {
      return 1
    }
    return num * arguments.callee(num - 1)
  }
  // factorial = null
  // console.log( factorial(5))


  // console.log( factorial(5))
}

{
  var factorial = (function f(num) {
    if (num <= 1) {
      return 1
    } else {
      return num * f(num - 1)
    }
  })
  console.log(factorial(5))
}