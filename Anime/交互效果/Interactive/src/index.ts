import "./index.less";

let card: any = document.querySelector("#card");
let box: any = document.querySelectorAll(".box");
let now: number = 0;
let status: boolean = true;
let positionArr: any = [];

card.addEventListener("touchmove", function() {
  toggleBox();
});

function initPositionArr() {
  box.forEach((element: any, index: number) => {
    positionArr.push([index * 10, index * 60]);
  });
}
initPositionArr();

function toggleBox() {
  if (!status) return;
  status = false;
  positionArr.unshift(positionArr.pop());

  function setFisrtElement() {
    let idnex: number = now;
    let promise = new Promise(resolve => {
      setStyle(box[now], {
        transform: `rotateY(-20deg) translate(-500px, 0)`
      });
      resolve();
    });
    promise.then(() => {
      set();
    });

    function set() {
      idnex !== 0 ? idnex - 1 : idnex;
      setTimeout(() => {
        setStyle(box[idnex], {
          transform: `rotate(-60deg) translateZ(-360px)`
        });
      }, 100);
    }
  }
  setFisrtElement();

  box.forEach((element: any, index: number) => {
    if (index === now) return;
    setStyle(box[index], {
      transform: `rotate(-${positionArr[index][0]}deg) translateZ(-${
        positionArr[index][1]
      }px)`
    });
  });
  now++;
  if (now >= box.length) {
    now = 0;
  }
  setTimeout(() => {
    status = true;
  }, 300);
}

function setStyle(el: any, params: any) {
  Object.keys(params).forEach((key: any) => {
    el.style[key] = params[key];
  });
}

// async function test() {
//   console.log(1);
//   return 2;
// }
// async function test1() {
//   console.log(3);
//   return Promise.resolve(4);
// }

// async function test2() {
//   console.log(5);

//   const a = await test();
//   console.log(a);

//   const b = await test1();
//   console.log(b);

//   console.log(6);
// }

// test2();

// var test3 = new Promise(resolve => {
//   console.log(7);
//   resolve(8);
// });

// test3.then(val => {
//   console.log(val);
// });

// console.log(9);
