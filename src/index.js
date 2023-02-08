import GameView from './game_view';
import Game from './game';

console.log("webpack is working");

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");

canvas.width = Game.DIM_X;
canvas.height = Game.DIM_Y;

const gameview = new GameView(ctx);
gameview.start();