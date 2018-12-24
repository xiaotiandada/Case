import "./index.less";
import Utils from "./utils";

let card: any = document.querySelector(".card");

class Interactive {
  box: any;
  len: number;
  status: boolean;
  now: number;
  positionArr: any;
  constructor() {
    this.box = document.querySelectorAll(".box");
    this.len = this.box.length;
    this.status = true;
    this.now = 0;
    this.positionArr = [];
  }

  initData() {
    this.box.forEach((element: any, index: number) => {
      this.positionArr.push([10 * index, 60 * index]);
    });
  }
  touchStart() {
    if (!this.status) return false;
    this.status = false;
    this.toggleFirstElement();

    this.positionArr.unshift(this.positionArr.pop());

    this.box.forEach((element: any, index: number) => {
      if (index === this.now) return;
      Utils.setElementStyle(this.box[index], {
        transform: `rotate(-${this.positionArr[index][0]}deg) translateZ(-${
          this.positionArr[index][1]
        }px)`
      });
    });

    this.now++;

    if (this.now >= this.len) {
      this.now = 0;
    }

    setTimeout(() => {
      this.status = true;
    }, 300);
  }
  toggleFirstElement() {
    let index: number = this.now;
    const sleep = (time: number) =>
      new Promise(reslove => setTimeout(reslove, time));
    const setFirstElement = async () => {
      Utils.setElementStyle(this.box[index], {
        transform: `rotate(20deg) translate(-400px,0)`
      });
<<<<<<< HEAD
      await second();
    };
    const second = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          this.setElementStyle(this.box[index], {
            transform: `rotate(-${this.len - 1 * 10}deg) translateZ(-${this
              .len -
              1 * 60}px)`
          });
          resolve();
        }, 300);
=======
      await sleep(300);
      Utils.setElementStyle(this.box[index], {
        transform: `rotate(-${(this.len - 1) * 10}deg) translateZ(-${(this.len -
          1) *
          60}px)`
>>>>>>> 6392c38d356e7b3535e6dcb37ed1fb39751fe858
      });
    };
    setFirstElement();
  }
}

class ToggleDemo {
  container: any;
  toggleLink: any;
  now: number;
  constructor() {
    this.toggleLink = document.querySelectorAll("#header a");
    this.container = document.querySelectorAll(".container");
    this.now = 0;
  }

  init() {
    this.toggle(this.now);
    this.toggleClick();
  }
  toggleClick() {
    this.toggleLink.forEach((element: any, index: number) => {
      element.addEventListener("click", () => {
        this.toggle(index);
      });
    });
  }
  toggle(index: number) {
    Utils.setElementStyle(this.toggleLink[index], {
      color: "red"
    });
    Utils.setElementStyle(this.container[index], {
      display: "block"
    });
  }
  getNow() {
    return this.now;
  }
  setNow(index: number) {
    this.now = index;
  }
}

let toggleDemo = new ToggleDemo();
toggleDemo.init();

let interactive = new Interactive();
interactive.initData();

card.addEventListener("touchmove", () => {
  interactive.touchStart();
});
