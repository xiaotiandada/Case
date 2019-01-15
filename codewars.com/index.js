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
    const getName = obj => obj.name;
    const addStr = arr => {
      let str = "";
      let len = arr.length;
      if (len === 0) return str;
      else if (len === 1) return (str = arr[0]);
      for (let i = 0; i < len; i++)
        if (i === 0) str += arr[i];
        else if (i === arr.length - 1) str += " & " + arr[i];
      else str += ", " + arr[i];
      return str;
    };
    const arr = names.map(getName);
    return addStr(arr);
  }
}

{
  /**
   * Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, and u as vowels for this Kata.

    The input string will only consist of lower case letters and/or spaces.
   */
  function getCount(str) {
    const searchStr = str => str.match(/[aeiou]/g);

    const addCount = str => (str ? str.length : 0);

    const strs = searchStr(str);

    return addCount(strs);
  }
}

{
  /** 
   * You might know some pretty large perfect squares. But what about the NEXT one?
    Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
    If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

    findNextSquare(121) --> returns 144
    findNextSquare(625) --> returns 676
    findNextSquare(114) --> returns -1 since 114 is not a perfect
  */

  function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise

    const sqrtNum = num => Math.sqrt(num);

    const isInt = num => Number.isInteger(num);

    const val = sqrtNum(sq);

    return isInt(val) ? (val + 1) * (val + 1) : -1;
  }
}


{

  /**
   * 
   * @param {*} n 
   * @param {*} x 
   * @param {*} y 
   * 
   * Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
   */
  function isDivisible(n, x, y) {
    const divisible = (n, num) => n % num === 0 ? true : false

    return divisible(n, x) && divisible(n, y)
  }
}