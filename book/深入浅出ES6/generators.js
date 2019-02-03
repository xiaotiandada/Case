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

  let gen1 = generators("test");
  for (let i = 0; i < 10; i++) {
    let obj = gen1.next();
    if (obj.done) {
      break;
    }
    console.log(obj);
  }
}

{
  class RangeIterator {
    constructor(start, stop) {
      this.value = start;
      this.stop = stop;
    }

    [Symbol.iterator]() {
      return this;
    }
    next() {
      let value = this.value;
      if (value < this.stop) {
        this.value++;
        return {
          value: value,
          done: false
        };
      } else {
        return {
          value: undefined,
          done: true
        };
      }
    }
  }

  function range(start, stop) {
    return new RangeIterator(start, stop);
  }

  for (let value of range(0, 3)) {
    console.log(value);
  }
}

{
  for (const value of range(0, 3)) {
    console.log(value);
  }

  function* range(start, stop) {
    for (let i = start; i < stop; i++) {
      yield i;
    }
  }
}
