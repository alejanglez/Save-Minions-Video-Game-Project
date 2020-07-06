class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.car = new Player(this, 200, 550, 50, 50);
    this.obstacles = [];
    this.backgroundImg = new Image();
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 500;
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.start();
    this.createObstacles();
    this.createObstacles2();
  }

  start() {

    this.drawBackgroundLines();
    this.drawBackground();
    this.drawMainCharacter();

    setInterval(() => {
      this.clear();
      this.drawBackgroundLines();
      this.drawBackground();
      this.drawMainCharacter();
      this.car.move();
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].move();
        this.obstacles[i].draw();
        this.car.crashCollision(this.obstacles[i]);
        if (this.obstacles[i].y > 800) {
          this.obstacles.splice(i, 1);
        }
      }
    }, 1000 / 120);
  }

  createObstacles() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.obstacles.push(new Obstacle(this));
    }

    setTimeout(() => {
      this.createObstacles();
    }, 3000);
  }

  createObstacles2() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.obstacles.push(new Obstacle2(this));
    }

    setTimeout(() => {
      this.createObstacles2();
    }, 5000);
  }

  drawBackground() {
    this.backgroundImg.src = "images/fondostory.jpg";
    this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.ctx.beginPath();
    this.ctx.moveTo(10, 250);
    this.ctx.lineTo(150, 250);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(200, 250);
    this.ctx.lineTo(300, 250);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(350, 250);
    this.ctx.lineTo(490, 250);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();

  }

  drawBackgroundLines() {

    this.ctx.beginPath();
    this.ctx.moveTo(10, 250);
    this.ctx.lineTo(150, 250);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(200, 250);
    this.ctx.lineTo(300, 250);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(350, 250);
    this.ctx.lineTo(490, 250);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();

  }

  drawMainCharacter() {
    this.car.drawComponent("images/pngegg (2).png");
  }

  clear() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }



}