import MovingObject from "./moving_object";
import Enemy from "./enemy";
import Exp from "./experience";


class Player extends MovingObject {
  static RADIUS = 15;
  static COLOR = "#FF00FF"

  constructor(pos, game) {
    const options = {};
    options.pos = pos;
    options.vel = [0,0];
    options.game = game;
    options.radius = Player.RADIUS;
    options.color = Player.COLOR;
    super(options);
    this.health = 100;
    this.experience = 0;
  }

  draw(ctx) {
    // ctx.fillStyle = "black";
    // ctx.rect(this.pos[0] - this.radius, this.pos[1] + this.radius, this.radius * 2, 5);
    // ctx.fill();
    
    ctx.beginPath();
    ctx.rect(this.pos[0] - this.radius, this.pos[1] + this.radius, (this.radius * 2) * (this.health / 100), 5);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
  }

  move() {
    // do nothing for now, eventually impact sprite motion
  }

  damage() {
    this.health -= 1;
    if (this.health === 0) alert("game over!")
  }

  level() {

  }

  collideWith(otherObject) {
    if (this.isCollidedWith(otherObject) && otherObject instanceof Enemy) {
      let overlap = this.radius + otherObject.radius - dist(this.pos, otherObject.pos);
      let angle = Math.atan2(otherObject.pos[1] - this.pos[1], 
        otherObject.pos[0] - this.pos[0]);
    
      otherObject.pos[0] += overlap * Math.cos(angle);
      otherObject.pos[1] += overlap * Math.sin(angle);
      this.damage();
    } else if (this.isCollidedWith(otherObject) && otherObject instanceof Exp) {
      this.game.remove(otherObject);
      this.experience += 1;
    }
  }

}

export default Player;