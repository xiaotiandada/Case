{
  function* generators(name) {
    yield "one" + name;
    yield "two" + name;
    yield "three" + name;
  }

  let gen = generators("xiaotian");
  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());

  let gen1 = generators('test')
  for (let i = 0; i < 10; i++) {
    let obj = gen1.next()
    if (obj.done) {
      break
    }
    console.log(obj)
  }
}