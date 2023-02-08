import Player from "./player";
import Enemy from "./enemy";
import Bullet from "./bullet";
import { dist, randomVec, vecBtwPts } from "./util";
import Exp from "./experience";

class Game {
  static DIM_X = 750;
  static DIM_Y = 500;

  constructor(ctx) {
    // add game objects
    this.player = new Player([Game.DIM_X / 2, Game.DIM_Y / 2], this)
    this.enemies = [];
    this.bullets = [];
    this.exps = [];
    this.enemySetup();
    this.bulletSetup();
  }

  enemySetup() {
    this.enemyInterval = setInterval( this.addEnemy.bind(this), 2000)
    setTimeout(() => {
      clearInterval(this.enemyInterval)
      this.enemyInterval = setInterval( this.addEnemy.bind(this), 1000)
    }, 10000)
    setTimeout(() => {
      clearInterval(this.enemyInterval)
      this.enemyInterval = setInterval( this.addEnemy.bind(this), 500)
    }, 20000)
    setTimeout(() => {
      clearInterval(this.enemyInterval)
      this.enemyInterval = setInterval( this.addEnemy.bind(this), 4000)
    }, 30000)
    setTimeout(() => clearInterval(this.enemyInterval), 40000)
  }

  bulletSetup() {
    this.bulletInterval = setInterval(this.addBullet.bind(this), 2000)
  }

  add(obj) {
    if (obj instanceof Enemy) {
      this.enemies.push(obj);
    } else if (obj instanceof Bullet) {
      this.bullets.push(obj)
    } else if (obj instanceof Exp) {
      this.exps.push(obj);
    }
  }
  
  addEnemy() {
    this.add(new Enemy(this.randomOuterPos(), this))
  }

  addBullet() {
    let vec = this.checkClosest();
    let pos = [this.player.pos[0] + vec[0], this.player.pos[1] + vec[1]]
    this.add(new Bullet(pos, vec, this))
  }

  randomPosition() {
    return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y]
  }

  randomOuterPos() {
    const pos = [];
    pos.push([-Enemy.RADIUS * 2, Math.random() * Game.DIM_Y])
    pos.push([Game.DIM_X + Enemy.RADIUS * 2, Math.random() * Game.DIM_Y])
    pos.push([Math.random() * Game.DIM_X, -Enemy.RADIUS * 2])
    pos.push([Math.random() * Game.DIM_X, Game.DIM_Y + Enemy.RADIUS * 2])
    return pos[Math.floor(Math.random() * 4)]
  }

  vecToPlayer(pos) {
    const vel = [0,0];
    if (pos[0] < (Game.DIM_X / 2)) {
      vel[0] = 1;
    } else if (pos[0] > (Game.DIM_X / 2)) {
      vel[0] = -1;
    }
    if (pos[1] < (Game.DIM_Y / 2)) {
      vel[1] = 1;
    } else if (pos[1] > (Game.DIM_Y / 2)) {
      vel[1] = -1;
    }
    return vel;
  }

  allObjects() {
    return this.bullets.concat(this.enemies).concat([this.player]).concat(this.exps);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, Game.DIM_X * (this.player.experience / 10), 15);
    this.allObjects().forEach(obj => {
      obj.draw(ctx)
    })
  }

  moveObjects(timeDelta) {
    this.allObjects().forEach(obj => {
      obj.move(timeDelta)
    })
  }

  checkCollisions() {
    for(let i = 0; i < this.allObjects().length; i++) {
      const obj1 = this.allObjects()[i];
      for(let j = i + 1; j < this.allObjects().length; j++) {
        const obj2 = this.allObjects()[j];
        if (obj1.isCollidedWith(obj2)) {
          obj1.collideWith(obj2)
        }
      }
    }
  }

  checkClosest() {
    let minDist = Infinity;
    let vec = randomVec(1);
    for(let i = 0; i < this.enemies.length; i++) {
      let obj = this.enemies[i];
      let curDist = dist(this.player.pos, obj.pos);
      if (curDist < minDist) {
        minDist = curDist;
        vec = vecBtwPts(this.player.pos, obj.pos, 4);
      }
    }
    return vec;
  }

  step(timeDelta) {
    this.moveObjects(timeDelta);
    this.checkCollisions();
  }

  remove(obj) {
    if (obj instanceof Enemy) {
      this.enemies = this.enemies.filter(ele => {
        return ele !== obj;
      })
      let expos = [obj.pos[0], obj.pos[1]];
      this.add(new Exp(expos, this))
    } else if (obj instanceof Bullet) {
      this.bullets = this.bullets.filter(ele => {
        return ele !== obj;
      })
    } else if (obj instanceof Exp) {
      this.exps = this.exps.filter(ele => {
        return ele !== obj;
      })
    }
  }


}

export default Game;