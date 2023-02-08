import MovingObject from "./moving_object";
import Player from "./player";
import { dist } from "./util";

class Enemy extends MovingObject {
  static RADIUS = 20;
  static COLOR = "#FFFF00";

  constructor(pos, game) {
    const options = {};
    options.pos = pos;
    options.vel = game.vecToPlayer(pos);
    options.game = game;
    options.radius = Enemy.RADIUS;
    options.color = Enemy.COLOR;
    super(options)
  }

  move(timeDelta) {
    this.vel = this.game.vecToPlayer(this.pos)
    super.move(timeDelta)
  }

  collideWith(otherObject) {
    if (this.isCollidedWith(otherObject)) {
      let overlap = this.radius + otherObject.radius - dist(this.pos, otherObject.pos);
      let angle = Math.atan2(otherObject.pos[1] - this.pos[1], 
        otherObject.pos[0] - this.pos[0]);
      
      if (otherObject instanceof Player) {
        this.pos[0] -= overlap * Math.cos(angle);
        this.pos[1] -= overlap * Math.sin(angle);
        otherObject.damage();
      } else {
        // Move both enemies apart along the angle
        this.pos[0] -= overlap * Math.cos(angle) / 2;
        this.pos[1] -= overlap * Math.sin(angle) / 2;
        otherObject.pos[0] += overlap * Math.cos(angle) / 2;
        otherObject.pos[1] += overlap * Math.sin(angle) / 2;
      }
      
    }
  }
}

export default Enemy;