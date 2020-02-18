console.log('暴露模块模式');

// 暴露模块模式

let myRevealingModule = function() {

  let privateVar = 'Ben Cherry'
  let publishVar = 'Hey there'

  function privateFunction() {
    console.log('Name: ' + privateVar);
  }

  function publishSetName(strName) {
    privateVar = strName
  }

  function publishGetName() {
    privateFunction()
  }

  return {
    setName: publishSetName,
    greeting: publishVar,
    getName: publishGetName
  }
}()

console.log(myRevealingModule);

console.log(myRevealingModule.greeting);
console.log(myRevealingModule.getName());

myRevealingModule.setName('Update')

console.log(myRevealingModule.greeting);
console.log(myRevealingModule.getName());

console.log(myRevealingModule);

console.log('-----------------------------------------');

// 这个模式可以用于将私有函数和属性以更加规范的命名方式展现出来。

let myRevealingModule1 = function() {

  let privateCounter = 0

  function privateFunction() {
    privateCounter++
  }

  function publishFunction() {
    publicIncrement()
  }

  function publicIncrement() {
    privateFunction()
  }

  function publishGetCount() {
    return privateCounter
  }

  return {
    start: publishFunction,
    increment: publicIncrement,
    count: publishGetCount
  }
}()

console.log(myRevealingModule1);
console.log(myRevealingModule1.count());

myRevealingModule1.start();


console.log(myRevealingModule1.count());

myRevealingModule1.increment();

console.log(myRevealingModule1.count());


