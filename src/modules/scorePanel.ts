class ScorePanel {
  score = 0;
  level = 1
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  //设置变量限制等级
  maxLevel: number
  //设置变量表示等级分差
  upScore: number

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById("score")!
    this.levelEle = document.getElementById("level")!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  //设置一个加分的方法
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ""
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ""
    }
  }
}

let scorepannel = new ScorePanel(100, 2)
//scorepannel.addScore()
// scorepannel.addScore()
// scorepannel.addScore()
// for (let i = 0; i < 200; i++) {
//   scorepannel.addScore()
// }


export default ScorePanel