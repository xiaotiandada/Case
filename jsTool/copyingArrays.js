var original = [1,2,3]

var copy1 = original.slice(0)
var copy2 = [...original]

console.log(copy1, copy2);


var deepArray = [['freecodecamp']]
var shallowCopy = deepArray.slice(0)

// shallowCopy[0].push('is great')
// console.log(deepArray[0], shallowCopy[0]);

var deepCopy = JSON.parse(JSON.stringify(deepArray))
deepCopy[0].push('is great')
console.log(deepArray[0], deepCopy[0]);