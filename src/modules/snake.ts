class Snake {
  head: HTMLElement;
  bodies: HTMLCollectionOf<HTMLElement>
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("snake")!
    this.head = document.querySelector("#snake > div")!
    this.bodies = this.element.getElementsByTagName("div")

  }

  //获取蛇的坐标
  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }

  //设置蛇的坐标
  set X(value: number) {
    if (this.X === value) {
      return
    }

    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了")
    }

    if (this.bodies[1] && this.bodies[1].offsetLeft === value) {
      if (value > this.X) {
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }
    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkCrash()
  }

  set Y(value: number) {
    if (this.Y === value) {
      return
    }

    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了!")
    }

    if (this.bodies[1] && this.bodies[1].offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkCrash()

  }

  //设置蛇增加身体的方法
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }

  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = this.bodies[i - 1].offsetLeft
      let Y = this.bodies[i - 1].offsetTop;
      this.bodies[i].style.left = X + 'px';
      this.bodies[i].style.top = Y + 'px';
    }
  }
  
  checkCrash() {
    for (let i = 1; i < this.bodies.length; i++) {
      let body = this.bodies[i]
      if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
        throw new Error("撞到自己了！")
      }
    }
  }
}

export default Snake

