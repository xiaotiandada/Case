class Animate {
  element: string;
  constructor(element: string) {
    this.element = element
  }

  then(options: object) {
    let el = <HTMLElement>document.querySelector(this.element)
    let cssOptions = Object.entries(options)

    for (const iterator of cssOptions) {
      let key = iterator[0]
      let val = iterator[1]
      el.style[<any>key] = val
    }
    return this;
  }
}