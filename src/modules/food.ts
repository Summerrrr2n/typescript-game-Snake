
class Food {
  element: HTMLElement;

  constructor() {
    //获取food元素并赋值，感叹号表示确认不为空
    this.element = document.getElementById("food")!

  }

  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }

  //修改食物位置的方法
  change() {
    let left = Math.round(Math.random() * 29) * 10 + "px"
    let top = Math.round(Math.random() * 29) * 10 + "px"
    this.element.style.left = left
    this.element.style.top = top
  }

}

// 测试代码
// const food = new Food()
// console.log(food.X, food.Y);
// food.change()
// console.log(food.X, food.Y);


export default Food