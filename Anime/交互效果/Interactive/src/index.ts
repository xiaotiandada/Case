import "./index.less";
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
      this.setElementStyle(this.box[index], {
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
    const second = () => {
      return new Promise(resolve => {
        return setTimeout(() => {
          this.setElementStyle(this.box[index], {
            transform: `rotate(-${(this.len - 1) * 10}deg) translateZ(-${(this
              .len -
              1) *
              60}px)`
          });
          return resolve();
        }, 300);
      });
    };
    const setFirstElement = async () => {
      this.setElementStyle(this.box[index], {
        transform: `rotate(20deg) translate(-400px,0)`
      });
      await second();
    };
    setFirstElement();
  }

  setElementStyle(obj: any, params: any) {
    Object.keys(params).forEach(key => {
      obj.style[key] = params[key];
    });
  }
}

let interactive = new Interactive();
interactive.initData();

card.addEventListener("touchmove", () => {
  interactive.touchStart();
});
