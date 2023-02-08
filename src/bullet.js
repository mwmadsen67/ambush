import MovingObject from "./moving_object";
import Enemy from "./enemy";

class Bullet extends MovingObject {
  static RADIUS = 4;
  static COLOR = "#00FF00"
  
  constructor(pos, vel, game) {
    const options = {};
    options.pos = pos;
    options.vel = vel;
    options.game = game;
    options.radius = Bullet.RADIUS;
    options.color = Bullet.COLOR;
    super(options)
  }

  collideWith(otherObject) {
    if (this.isCollidedWith(otherObject) && otherObject instanceof Enemy) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  }

}

export default Bullet;