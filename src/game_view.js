import Game from './game';

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(ctx);
    this.lastTime = 0;
  }

  start() {
    window.requestAnimationFrame(this.animate.bind(this));
  }
  
  animate(time) {
    // console.log(time)
    let timeDelta = time - this.lastTime;
    this.game.draw(this.ctx);
    this.game.step(timeDelta);
    this.lastTime = time;
    window.requestAnimationFrame(this.animate.bind(this))
  }

}

export default GameView;