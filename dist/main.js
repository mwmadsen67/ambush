/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n\n\n\nclass Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static RADIUS = 4;\n  static COLOR = \"#00FF00\"\n  \n  constructor(pos, vel, game) {\n    const options = {};\n    options.pos = pos;\n    options.vel = vel;\n    options.game = game;\n    options.radius = Bullet.RADIUS;\n    options.color = Bullet.COLOR;\n    super(options)\n  }\n\n  collideWith(otherObject) {\n    if (this.isCollidedWith(otherObject) && otherObject instanceof _enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.game.remove(otherObject);\n      this.game.remove(this);\n    }\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bullet);\n\n//# sourceURL=webpack://ambush/./src/bullet.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\nclass Enemy extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static RADIUS = 20;\n  static COLOR = \"#FFFF00\";\n\n  constructor(pos, game) {\n    const options = {};\n    options.pos = pos;\n    options.vel = game.vecToPlayer(pos);\n    options.game = game;\n    options.radius = Enemy.RADIUS;\n    options.color = Enemy.COLOR;\n    super(options)\n  }\n\n  move(timeDelta) {\n    this.vel = this.game.vecToPlayer(this.pos)\n    super.move(timeDelta)\n  }\n\n  collideWith(otherObject) {\n    if (this.isCollidedWith(otherObject)) {\n      let overlap = this.radius + otherObject.radius - (0,_util__WEBPACK_IMPORTED_MODULE_2__.dist)(this.pos, otherObject.pos);\n      let angle = Math.atan2(otherObject.pos[1] - this.pos[1], \n        otherObject.pos[0] - this.pos[0]);\n      \n      if (otherObject instanceof _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        this.pos[0] -= overlap * Math.cos(angle);\n        this.pos[1] -= overlap * Math.sin(angle);\n        otherObject.damage();\n      } else {\n        // Move both enemies apart along the angle\n        this.pos[0] -= overlap * Math.cos(angle) / 2;\n        this.pos[1] -= overlap * Math.sin(angle) / 2;\n        otherObject.pos[0] += overlap * Math.cos(angle) / 2;\n        otherObject.pos[1] += overlap * Math.sin(angle) / 2;\n      }\n      \n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enemy);\n\n//# sourceURL=webpack://ambush/./src/enemy.js?");

/***/ }),

/***/ "./src/experience.js":
/*!***************************!*\
  !*** ./src/experience.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n// import Player from \"./player\";\n\nclass Exp extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static RADIUS = 3;\n  static COLOR = \"#0000FF\"\n\n  constructor(pos, game) {\n      const options = {};\n      options.pos = pos;\n      options.vel = [0,0];\n      options.game = game;\n      options.radius = Exp.RADIUS;\n      options.color = Exp.COLOR;\n      super(options);\n  }\n\n  // collideWith(otherObject) {\n  //   if (this.isCollidedWith(otherObject) && otherObject instanceof Player) {\n  //     this.game.remove(this);\n  //   }\n  // }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Exp);\n\n//# sourceURL=webpack://ambush/./src/experience.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _experience__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience */ \"./src/experience.js\");\n\n\n\n\n\n\nclass Game {\n  static DIM_X = 750;\n  static DIM_Y = 500;\n\n  constructor(ctx) {\n    // add game objects\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([Game.DIM_X / 2, Game.DIM_Y / 2], this)\n    this.enemies = [];\n    this.bullets = [];\n    this.exps = [];\n    this.enemySetup();\n    this.bulletSetup();\n  }\n\n  enemySetup() {\n    this.enemyInterval = setInterval( this.addEnemy.bind(this), 2000)\n    setTimeout(() => {\n      clearInterval(this.enemyInterval)\n      this.enemyInterval = setInterval( this.addEnemy.bind(this), 1000)\n    }, 10000)\n    setTimeout(() => {\n      clearInterval(this.enemyInterval)\n      this.enemyInterval = setInterval( this.addEnemy.bind(this), 500)\n    }, 20000)\n    setTimeout(() => {\n      clearInterval(this.enemyInterval)\n      this.enemyInterval = setInterval( this.addEnemy.bind(this), 4000)\n    }, 30000)\n    setTimeout(() => clearInterval(this.enemyInterval), 40000)\n  }\n\n  bulletSetup() {\n    this.bulletInterval = setInterval(this.addBullet.bind(this), 2000)\n  }\n\n  add(obj) {\n    if (obj instanceof _enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.enemies.push(obj);\n    } else if (obj instanceof _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.bullets.push(obj)\n    } else if (obj instanceof _experience__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\n      this.exps.push(obj);\n    }\n  }\n  \n  addEnemy() {\n    this.add(new _enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.randomOuterPos(), this))\n  }\n\n  addBullet() {\n    let vec = this.checkClosest();\n    let pos = [this.player.pos[0] + vec[0], this.player.pos[1] + vec[1]]\n    this.add(new _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pos, vec, this))\n  }\n\n  randomPosition() {\n    return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y]\n  }\n\n  randomOuterPos() {\n    const pos = [];\n    pos.push([-_enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RADIUS * 2, Math.random() * Game.DIM_Y])\n    pos.push([Game.DIM_X + _enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RADIUS * 2, Math.random() * Game.DIM_Y])\n    pos.push([Math.random() * Game.DIM_X, -_enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RADIUS * 2])\n    pos.push([Math.random() * Game.DIM_X, Game.DIM_Y + _enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RADIUS * 2])\n    return pos[Math.floor(Math.random() * 4)]\n  }\n\n  vecToPlayer(pos) {\n    const vel = [0,0];\n    if (pos[0] < (Game.DIM_X / 2)) {\n      vel[0] = 1;\n    } else if (pos[0] > (Game.DIM_X / 2)) {\n      vel[0] = -1;\n    }\n    if (pos[1] < (Game.DIM_Y / 2)) {\n      vel[1] = 1;\n    } else if (pos[1] > (Game.DIM_Y / 2)) {\n      vel[1] = -1;\n    }\n    return vel;\n  }\n\n  allObjects() {\n    return this.bullets.concat(this.enemies).concat([this.player]).concat(this.exps);\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = \"#000000\";\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = \"blue\";\n    ctx.fillRect(0, 0, Game.DIM_X * (this.player.experience / 10), 15);\n    this.allObjects().forEach(obj => {\n      obj.draw(ctx)\n    })\n  }\n\n  moveObjects(timeDelta) {\n    this.allObjects().forEach(obj => {\n      obj.move(timeDelta)\n    })\n  }\n\n  checkCollisions() {\n    for(let i = 0; i < this.allObjects().length; i++) {\n      const obj1 = this.allObjects()[i];\n      for(let j = i + 1; j < this.allObjects().length; j++) {\n        const obj2 = this.allObjects()[j];\n        if (obj1.isCollidedWith(obj2)) {\n          obj1.collideWith(obj2)\n        }\n      }\n    }\n  }\n\n  checkClosest() {\n    let minDist = Infinity;\n    let vec = (0,_util__WEBPACK_IMPORTED_MODULE_3__.randomVec)(1);\n    for(let i = 0; i < this.enemies.length; i++) {\n      let obj = this.enemies[i];\n      let curDist = (0,_util__WEBPACK_IMPORTED_MODULE_3__.dist)(this.player.pos, obj.pos);\n      if (curDist < minDist) {\n        minDist = curDist;\n        vec = (0,_util__WEBPACK_IMPORTED_MODULE_3__.vecBtwPts)(this.player.pos, obj.pos, 4);\n      }\n    }\n    return vec;\n  }\n\n  step(timeDelta) {\n    this.moveObjects(timeDelta);\n    this.checkCollisions();\n  }\n\n  remove(obj) {\n    if (obj instanceof _enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.enemies = this.enemies.filter(ele => {\n        return ele !== obj;\n      })\n      let expos = [obj.pos[0], obj.pos[1]];\n      this.add(new _experience__WEBPACK_IMPORTED_MODULE_4__[\"default\"](expos, this))\n    } else if (obj instanceof _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.bullets = this.bullets.filter(ele => {\n        return ele !== obj;\n      })\n    } else if (obj instanceof _experience__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\n      this.exps = this.exps.filter(ele => {\n        return ele !== obj;\n      })\n    }\n  }\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://ambush/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass GameView {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.lastTime = 0;\n  }\n\n  start() {\n    window.requestAnimationFrame(this.animate.bind(this));\n  }\n  \n  animate(time) {\n    // console.log(time)\n    let timeDelta = time - this.lastTime;\n    this.game.draw(this.ctx);\n    this.game.step(timeDelta);\n    this.lastTime = time;\n    window.requestAnimationFrame(this.animate.bind(this))\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\n\n//# sourceURL=webpack://ambush/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nconsole.log(\"webpack is working\");\n\nconst canvas = document.getElementById('game-canvas');\nconst ctx = canvas.getContext(\"2d\");\n\ncanvas.width = _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DIM_X;\ncanvas.height = _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DIM_Y;\n\nconst gameview = new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\ngameview.start();\n\n//# sourceURL=webpack://ambush/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n// import Bullet from \"./bullet\";\n\nclass MovingObject {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.game = options.game;\n    this.radius = options.radius;\n    this.color = options.color;\n  }\n\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.fillStyle = this.color;\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);\n    ctx.fill();\n    ctx.closePath();\n  }\n\n  move(timeDelta) {\n    if (key.isPressed(\"w\")) this.pos[1] += 1;\n    if (key.isPressed(\"d\")) this.pos[0] -= 1;\n    if (key.isPressed(\"s\")) this.pos[1] -= 1;\n    if (key.isPressed(\"a\")) this.pos[0] += 1;\n    \n    this.pos[0] = this.pos[0] + (this.vel[0] * (timeDelta / 20))\n    this.pos[1] = this.pos[1] + (this.vel[1] * (timeDelta / 20))\n  }\n\n  isCollidedWith(otherObject) {\n    // is distance between less than radius + radius?\n    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.dist)(this.pos, otherObject.pos) < (this.radius + otherObject.radius)) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  collideWith(otherObject) {\n  \n  }\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovingObject);\n\n//# sourceURL=webpack://ambush/./src/moving_object.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n/* harmony import */ var _experience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience */ \"./src/experience.js\");\n\n\n\n\n\nclass Player extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static RADIUS = 15;\n  static COLOR = \"#FF00FF\"\n\n  constructor(pos, game) {\n    const options = {};\n    options.pos = pos;\n    options.vel = [0,0];\n    options.game = game;\n    options.radius = Player.RADIUS;\n    options.color = Player.COLOR;\n    super(options);\n    this.health = 100;\n    this.experience = 0;\n  }\n\n  draw(ctx) {\n    // ctx.fillStyle = \"black\";\n    // ctx.rect(this.pos[0] - this.radius, this.pos[1] + this.radius, this.radius * 2, 5);\n    // ctx.fill();\n    \n    ctx.beginPath();\n    ctx.rect(this.pos[0] - this.radius, this.pos[1] + this.radius, (this.radius * 2) * (this.health / 100), 5);\n    ctx.fillStyle = \"red\";\n    ctx.fill();\n    ctx.closePath();\n    ctx.beginPath();\n    ctx.fillStyle = this.color;\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);\n    ctx.fill();\n    ctx.closePath();\n  }\n\n  move() {\n    // do nothing for now, eventually impact sprite motion\n  }\n\n  damage() {\n    this.health -= 1;\n    if (this.health === 0) alert(\"game over!\")\n  }\n\n  level() {\n\n  }\n\n  collideWith(otherObject) {\n    if (this.isCollidedWith(otherObject) && otherObject instanceof _enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      let overlap = this.radius + otherObject.radius - dist(this.pos, otherObject.pos);\n      let angle = Math.atan2(otherObject.pos[1] - this.pos[1], \n        otherObject.pos[0] - this.pos[0]);\n    \n      otherObject.pos[0] += overlap * Math.cos(angle);\n      otherObject.pos[1] += overlap * Math.sin(angle);\n      this.damage();\n    } else if (this.isCollidedWith(otherObject) && otherObject instanceof _experience__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.game.remove(otherObject);\n      this.experience += 1;\n    }\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://ambush/./src/player.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dist\": () => (/* binding */ dist),\n/* harmony export */   \"randomVec\": () => (/* binding */ randomVec),\n/* harmony export */   \"scale\": () => (/* binding */ scale),\n/* harmony export */   \"vecBtwPts\": () => (/* binding */ vecBtwPts)\n/* harmony export */ });\n\nconst randomVec = (length) => {\n  const deg = 2 * Math.PI * Math.random();\n  return scale([Math.sin(deg), Math.cos(deg)], length)\n};\n\nconst vecBtwPts = (pos1, pos2, n) => {\n  const angle = Math.atan2(pos2[1] - pos1[1], pos2[0] - pos1[0]);\n  return scale([Math.cos(angle), Math.sin(angle)], n);\n}\n\nconst scale = (vec, m) => [vec[0] * m, vec[1] * m];\n\nconst dist = (pos1, pos2) => Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2);\n\n//# sourceURL=webpack://ambush/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;