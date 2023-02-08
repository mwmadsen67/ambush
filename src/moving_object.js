import { dist } from "./util";
import Player from "./player";
// import Bullet from "./bullet";

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.game = options.game;
    this.radius = options.radius;
    this.color = options.color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
  }

  move(timeDelta) {
    if (key.isPressed("w")) this.pos[1] += 1;
    if (key.isPressed("d")) this.pos[0] -= 1;
    if (key.isPressed("s")) this.pos[1] -= 1;
    if (key.isPressed("a")) this.pos[0] += 1;
    
    this.pos[0] = this.pos[0] + (this.vel[0] * (timeDelta / 20))
    this.pos[1] = this.pos[1] + (this.vel[1] * (timeDelta / 20))
  }

  isCollidedWith(otherObject) {
    // is distance between less than radius + radius?
    if (dist(this.pos, otherObject.pos) < (this.radius + otherObject.radius)) {
      return true;
    } else {
      return false;
    }
  }

  collideWith(otherObject) {
  
  }


}

export default MovingObject;