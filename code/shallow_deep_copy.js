{
  let a = {
    b: "b",
    c: "1",
    d: {
      a: 1,
      b: 2,
      c: 3
    }
  };
  const shallowCopy = target => {
    let obj = Object.create(null);
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        obj[key] = target[key];
      }
    }
    return obj;
  };

  // let aa = shallowCopy(a);
  // console.log(a);
  // console.log(aa);
  // a.c = "2";
  // console.log(a);
  // console.log(aa);
  // a.d.a = 11;
  // console.log(a);
  // console.log(aa);
}

{
  let a = {
    b: "b",
    c: "1",
    d: {
      a: 1,
      b: 2,
      c: 3
    }
  };

  const deepCopy = target => {
    let obj = Object.create(null);
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        obj[key] =
          typeof target[key] === "object" ? deepCopy(target[key]) : target[key];
      }
    }
    return obj;
  };
  let aa = deepCopy(a);
  console.log(a);
  console.log(aa);
  a.c = "2";
  console.log(a);
  console.log(aa);
  a.d.a = 11;
  console.log(a);
  console.log(aa);
}
