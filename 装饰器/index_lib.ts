import { Mixin, Throttle } from 'lodash-decorators';
import {validate, validateOrReject, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";
import { autobind, readonly } from 'core-decorators'

const MyOtherApi = {
  someCoolMethod(str: string) {
    // so something cool
    console.log(str)
  }
}

@Mixin(MyOtherApi)
class Person {

  @Throttle(100)
  event() {
    console.log(1)
  }

  init() {
    window.addEventListener('scroll', this.event)
  }
}

let person = new Person()
person.someCoolMethod('hi mixin')

person.init()

// -----

class Post {

  @Length(10, 20,{message: 'name的长度不能小于10不能大于20'})
  title: string

  @Min(0)
  @Max(10)
  rating: number
  constructor() {

  }
}

let post = new Post()
console.log(1, post.title)
post.title = "Hello"; // should not pass
console.log(2, post.title)

post.rating = 11; // should not pass
console.log(post.rating)

validate(post).then(errors => { // errors is an array of validation errors
  if (errors.length > 0) {
      console.log("validation failed. errors: ", errors);
  } else {
      console.log("validation succeed");
  }
});

validateOrReject(post).catch(errors => {
  console.log("Promise rejected (validation failed). Errors: ", errors);
});
// or

async function validateOrRejectExample(input) {
  try {
      await validateOrReject(input);
  } catch (errors) {
      console.log("Caught promise rejection (validation failed). Errors: ", errors)
  }
}

validateOrRejectExample(post)

// core-decorators

class Person {
  @autobind
  getPerson() {
    return this
  }
}

let person = new Person()
let { getPerson } = person

console.log(getPerson() === person)

console.log(getPerson())

@autobind
class Person1 {
  getPerson1() {
    return this
  }

  getPersonAgain1() {
    return this
  }
}

let person1 = new Person1()
let { getPerson1, getPersonAgain1 } = person1

console.log(getPerson1() === person1)
console.log(getPersonAgain1() === person1)

console.log(getPerson1())
console.log(getPersonAgain1())


// readonly

class Meal {
  @readonly
  entree: string = 'steak'
}

let dinner = new Meal()

dinner.entree = 'hi'