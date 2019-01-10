{
  /**
    list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // returns 'Bart, Lisa & Maggie'

    list([ {name: 'Bart'}, {name: 'Lisa'} ])
    // returns 'Bart & Lisa'

    list([ {name: 'Bart'} ])
    // returns 'Bart'

    list([])
    // returns ''
   */

  function list(names) {
    //your code here
    const getName = obj => obj.name
    const addStr = arr => {
      let str = ''
      let len = arr.length
      if (len === 0) return str
      else if (len === 1) return str = arr[0]
      for (let i = 0; i < len; i++)
        if (i === 0) str += arr[i]
      else if (i === arr.length - 1) str += ' & ' + arr[i]
      else str += ', ' + arr[i]
      return str
    }
    const arr = names.map(getName)
    return addStr(arr)
  }
}

{
  /**
   * 
   * @param {*} str 
   * Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, and u as vowels for this Kata.

    The input string will only consist of lower case letters and/or spaces.
   */
  function getCount(str) {
    const searchStr = str => str.match(/[aeiou]/g)

    const addCount = str => str ? str.length : 0

    const strs = searchStr(str)

    return addCount(strs);
  }
}