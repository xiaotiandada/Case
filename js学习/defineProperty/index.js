{
  let targetDom = document.querySelector("#box");

  Object.defineProperty(targetDom, "translateX", {
    set: function (value) {
      let transformText = `translateX(${value}px)`;
      targetDom.style.transform = transformText;
    }
  });

  const sleep = time => new Promise(reslove => setTimeout(reslove, time));

  async function start() {
    await sleep(500);
    targetDom.translateX = 30;
    await sleep(500);
    targetDom.translateX = 300;
    await sleep(500);
    targetDom.translateX = 0;
  }

  // start()
} {
  var person = {};
  var str = "123";
  Object.defineProperty(person, "val", {
    set: val => {
      str = val;
    },
    get: () => {
      return str;
    }
  });

  // console.log(str)
  // person.val = 'xiao'
  // console.log(str)
}

{
  let vm = {
    value: 0
  };

  class Dep {
    constructor() {
      this.list = [];
    }
    add(watcher) {
      this.list.push(watcher);
    }
    notify(newValue) {
      this.list.forEach(fn => fn(newValue));
    }
  }

  const renderInput = newValue => document.querySelector("#inp").value = newValue;
  const renderTitle = newValue => document.querySelector("#h1").innerHTML = newValue;

  let dep = new Dep();
  dep.add(renderInput);
  dep.add(renderTitle);

  const initMVVM = vm => Object.keys(vm).forEach(key => observer(vm, key, vm[key]));

  const observer = (vm, key, value) => {
    Object.defineProperty(vm, key, {
      enumerable: true,
      configurable: true,
      set: newValue => {
        if (value !== newValue) {
          value = newValue;
          dep.notify(value);
        }
      },
      get: () => value
    });
  };

  function inputChange(e) {
    vm.value = e.target.value;
  }

  function btnAdd() {
    vm.value++;
  }

  function btnLess() {
    vm.value--;
  }
  initMVVM(vm);
  dep.notify(vm.value);
}


{
  class Publisher {
    constructor() {
      this.registration = Object.create(null)
    }
    subscribe(type, fn) {
      if (Object.keys(this.registration).indexOf(type) > -1) {
        this.registration[type].push(fn)
      } else {
        this.registration[type] = []
        this.registration[type].push(fn)
      }
    }
    unSubscribe(type, fnName) {
      let spliceIndex = 0
      if (Object.keys(this.registration).indexOf(type) > -1) {
        this.registration[type].forEach((fn, index) => {
          if (fn.name === fnName) {
            spliceIndex = index
          }
        })
        spliceIndex > -1 ? this.registration[type].splice(spliceIndex, 1) : null
      }
    }
    publish(type, message) {
      if (Object.keys(this.registration).indexOf(type) > -1) {
        for (const fn of this.registration[type]) {
          fn(message)
        }
      }
    }
  }

  let publisher = new Publisher()
  let subscribeA = message => console.log(`A:${message}`)
  let subscribeB = message => console.log(`B:${message}`)
  let subscribeC = message => console.log(`C:${message}`)
  console.log(publisher.registration)
  publisher.subscribe('email', subscribeA)
  publisher.subscribe('email', subscribeB)
  publisher.subscribe('email', subscribeC)
  publisher.subscribe('game', subscribeA)
  publisher.publish('email', '订阅的一周邮件')
  publisher.publish('game', '订阅的一周游戏')
  publisher.unSubscribe('email', subscribeB.name)
  publisher.publish('email', '订阅的一周邮件')

  console.log(publisher.registration)
}