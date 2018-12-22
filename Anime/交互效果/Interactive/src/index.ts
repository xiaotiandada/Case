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
    let index: number = now;
    const goFirstEvent = async () => {
      console.log(1);
      setStyle(box[now], {
        transform: `rotateY(-20deg) translate(-500px, 0)`
      });
      await goTwoEvent();
    };
    const goTwoEvent = () => {
      return new Promise(resolve => {
        index !== 0 ? index - 1 : index;
        setTimeout(() => {
          setStyle(box[index], {
            transform: `rotate(-60deg) translateZ(-360px)`
          });
          resolve();
        }, 300);
      });
    };
    goFirstEvent();
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
