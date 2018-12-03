var person = {}
Object.defineProperty(person, 'name', {
  writable: true,
  value: 'Xiao'
})

// console.log(person.name);
// person.name = 's'
// console.log(person.name);


var book = {
  _year: 2004,
  edition: 1
}

Object.defineProperty(book, 'year', {
  get: function() {
    return this._year
  },

  set: function(newValue){
    if (newValue > 2004) {
      this._year = newValue
      this.edition += newValue - 2004
    }
  }
})


book.year = 2005
console.log(book.edition);