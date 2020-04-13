// https://medium.com/@oldmo860617/%E5%8D%81%E5%88%86%E9%90%98%E5%B8%B6%E4%BD%A0%E4%BA%86%E8%A7%A3-typescript-decorator-48c2ae9e246d

// Decorator 基礎語法與概念
function decorator1(target: any) {
  console.log('this is decorator1', target);
}

function decorator2(target: any) {
  console.log('this is decorator2', target); 
}

// Decoraotr 是由下往上執行的（Bottom-up）
// this is decorator2 [Function: Blog]
// this is decorator1 [Function: Blog]
@decorator1
@decorator2
class Blog {
  constructor() {

  }
}

// Class Decorator
function classDecorator(target: any) {
  console.log('classDecorator', target);
}

// Method Decorator
function methodDecorator(target: any, name: string, descriptor: PropertyDecorator) {
  console.log('Method decorator', target, name, descriptor);
}

// Property Decorator
function propertyDecorator(target: any, propertyName: string) {
  console.log('property decorator', target, propertyName);
}

// Parameter Decorator
function parameterDecorator(target: any, propertyKey: string, parameterIndex: number) {
  console.log('parameter decorator', target, propertyKey, parameterIndex);
}

@classDecorator
class Blog1 {
  @propertyDecorator
  author: string;
  blogs: any[] = [];
  constructor(author: string) {
    this.author = author
  }
  
  @methodDecorator
  getBlogNum() {
    return this.blogs.length;
  }

  calculateValue(@parameterDecorator num: number) {
    return num * this.blogs.length
  }
}

// Decorator factories
function Logger(LogString: string) {
  return function(constructor: Function) {
    console.log('Logger', LogString, constructor);
  }
}
@Logger('I am Kyle')
class Persons {
  name = 'kyle';

  constructor() {
    console.log('Creating a person ...')
  }
}
