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
    get: function() {
      return this._year;
    },

    set: function(newValue) {
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
    o.sayName = function() {
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
    this.sayName = function() {
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
  function Person(){}
  Person.prototype.name = 'xiao',
  Person.prototype.age = 19,
  Person.prototype.sayName = function(){
    console.log(this.name);
  }

  var person1 = new Person()
  person1.sayName()

  var person2 = new Person()
  person2.sayName()

  person1.name = 'lei'
  person1.sayName()
  person2.sayName()



  console.log(person1.hasOwnProperty('name'))
  console.log(person2.hasOwnProperty('name'))

  delete person1.name
  person1.sayName()
  person2.sayName()
}