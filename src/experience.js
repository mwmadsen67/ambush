import MovingObject from "./moving_object";
// import Player from "./player";

class Exp extends MovingObject {
  static RADIUS = 3;
  static COLOR = "#0000FF"

  constructor(pos, game) {
      const options = {};
      options.pos = pos;
      options.vel = [0,0];
      options.game = game;
      options.radius = Exp.RADIUS;
      options.color = Exp.COLOR;
      super(options);
  }

  // collideWith(otherObject) {
  //   if (this.isCollidedWith(otherObject) && otherObject instanceof Player) {
  //     this.game.remove(this);
  //   }
  // }
}

export default Exp;