let arr= [1, 2, 3, 3, 5, 7, 2, 6, 2, 8, 4];
let arrs = [1, [ 1, 2, 3 ], [ 3, 4, 5, [ 1, 3, 4, 5 ] ], 4, 5, 6];
// console.log([...new Set(arr)]);

// [1, 2, 3, 5, 7, 6, 8]

function Deduplication(data) {

  if (!Array.isArray(data) ) {
    return data
  }

  let list = []

  for (let i = 0; i < data.length; i++) {
    if (!list.includes(data[i])) {
      list.push(data[i])
    }
  }

  return list
}

let arrDedup = Deduplication(arr)
console.log('arrDedup', arrDedup)


function Deduplications(data) {
  if (!Array.isArray(data) ) {
    return data
  }

  let list = []
  const flat = (data) => {
    for (let i = 0; i < data.length; i++) {
      if (Array.isArray(data[i])) {
        flat(data[i])
      } else {
        list.push(data[i])
      }
    }
    return list
  }

  flat(data)

  return [ ...new Set(list) ]
}
let arrDedups = Deduplications(arrs)
console.log('arrDedups', arrDedups)
