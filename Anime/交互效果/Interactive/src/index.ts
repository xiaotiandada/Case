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

  setStyle(box[now], {
    transform: `rotateY(-20deg) translate(-500px, 0)`
  });

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
