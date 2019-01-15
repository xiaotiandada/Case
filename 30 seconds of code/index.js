{
  const ary = (fn, n) => (...args) => fn(...args.slice(0, n))

  const firstTwoMax = ary(Math.max, 2);
  const done = [
    [2, 3, 4, 5],
    [4, 5, 'a'],
    [1]
  ].map(item => firstTwoMax(...item))

  // console.log(done)
}