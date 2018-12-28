// {
//   let obj = {
//     name: 'xiao',
//     age: 19,
//     obj: {
//       name: 'name',
//       age: 1111
//     }
//   }

//   let obj1 = obj

//   console.log(obj)
//   console.log(obj1)

//   obj.name = 'lei'
//   obj.obj.name = 'namename'


//   console.log(obj)
//   console.log(obj1)

//   const shallowCopy = (obj) => {
//     let data = Object.create(null)
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         data[key] = obj[key]
//       }
//     }
//     return data
//   }

//   let obj2 = shallowCopy(obj)
//   console.log(obj2)

//   obj.name = 'shallowCopy'
//   obj.obj.name = 'shallow'

//   console.log(obj)
//   console.log(obj1)
//   console.log(obj2)
// }


{
  let obj = {
    name: 'xiao',
    obj: {
      name: 'lei',
      age: 19
    }
  }


  const deepCopy = (obj) => {
    let data = Object.create(null)
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        data[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
      }
    }
    return data
  }
  let obj1 = deepCopy(obj)

  console.log(obj)
  console.log(obj1)

  obj.name = 'deepcopy1'
  obj.obj.name = 'deepcopy'

  console.log(obj)
  console.log(obj1)

}

{
  let obj = {
    name: 'xiao'
  }
  let obj1 = obj.name
  console.log(obj)
  console.log(obj1)

  obj.name = 'lei'

  console.log(obj)
  console.log(obj1)
}