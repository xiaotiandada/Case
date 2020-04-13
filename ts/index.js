// let len = 0
// const fibonacci = (n, cache) => {
//   len++
//   console.log('fibonacci', n, len)
//   cache = cache || {};

//   if (cache[n]) return cache[n];
//   if (n < 2) return n;

//   return cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
// }

// console.log(fibonacci(4))

let len1 = 0
const fibonacci1 = (n) => {
  len1++
  console.log('----', n, len1)

  if (n < 2) return n;

  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

console.log(fibonacci1(4))
