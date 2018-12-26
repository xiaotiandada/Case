import "./index.less";
import Utils from "./utils";

let card: any = document.querySelector(".card");
let card1: any = document.querySelector(".card1");

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
      Utils.setElementStyle(element, {
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
    const setFirstElement = async () => {
      Utils.setElementStyle(this.box[index], {
        transform: `rotate(20deg) translate(-400px,0)`
      });
      await Utils.sleep(300);
      Utils.setElementStyle(this.box[index], {
        transform: `rotate(-${(this.len - 1) * 10}deg) translateZ(-${(this.len -
          1) *
          60}px)`
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
  toggle(now: number) {
    this.toggleLink.forEach((element: any, index: any) => {
      if (index === now) {
        Utils.setElementStyle(element, {
          color: "#fff"
        });
        return;
      }
      Utils.setElementStyle(element, {
        color: "rgb(220, 220, 220)"
      });
    });

    this.container.forEach((element: any, index: any) => {
      if (index === now) {
        Utils.setElementStyle(element, {
          display: "block"
        });
        return;
      }
      Utils.setElementStyle(element, {
        display: "none"
      });
    });
  }
  getNow() {
    return this.now;
  }
  setNow(index: number) {
    this.now = index;
  }
}

class Interactive1 {
  box: any;
  len: number;
  now: number;
  status: boolean;
  positionData: any;

  constructor() {
    this.box = document.querySelectorAll(".box1");
    this.len = this.box.length;
    this.now = 0;
    this.status = true;
    this.positionData = [];
  }

  init() {
    this.initDate();
  }

  initDate() {
    this.box.forEach((element: any, index: number) => {
      if (index === 0) {
        this.positionData.push([0, 0, 0, 0]);
      } else {
        this.positionData.push([4, 20 * index, 0, 20 * index]);
      }
    });
  }
  touchStart() {
    if (!this.status) return;
    this.status = false;
    this.toggleFirstElement();
    this.positionData.unshift(this.positionData.pop());
    this.box.forEach((element: any, index: number) => {
      if (index === this.now) return;
      Utils.setElementStyle(element, {
        transform: `rotateY(${this.positionData[index][0]}deg) translate3d(${
          this.positionData[index][1]
        }px, ${this.positionData[index][2]}px, -${
          this.positionData[index][3]
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
  async toggleFirstElement() {
    let index: number = this.now;
    Utils.setElementStyle(this.box[index], {
      transform: `rotateY(0) translate3d(-200%, 0px, 0px)`
    });
    await Utils.sleep(300);
    Utils.setElementStyle(this.box[index], {
      transform: `rotateY(${
        this.positionData[this.len - 1][0]
      }deg) translate3d(${this.positionData[this.len - 1][1]}px, ${
        this.positionData[this.len - 1][2]
      }px, -${this.positionData[this.len - 1][3]}px)`
    });
  }
}

let toggleDemo = new ToggleDemo();
toggleDemo.setNow(1);
toggleDemo.init();

let interactive = new Interactive();
interactive.initData();

let interactive1 = new Interactive1();
interactive1.init();

card.addEventListener("touchmove", () => {
  interactive.touchStart();
});

card1.addEventListener("touchmove", () => {
  interactive1.touchStart();
});
