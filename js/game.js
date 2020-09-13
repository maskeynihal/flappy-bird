import Playground from './playground.js';
import gameState from './gameState.js';
import globals from './globals.js';
import { bird } from './sprites.js';
import Scoreboard from './scoreboard.js';
import ScoreSheet from './scoreSheet.js';
export default class Game {
  static globals;
  constructor() {
    this.build();
    this.storeGlobalVariables();
  }

  build() {
    this.playground = new Playground();
    this.scoreSheet = new ScoreSheet();
  }

  static start() {
    Game.reset();
    gameState.currentState = gameState.playing;
  }

  update() {}

  static reset() {
    globals.loops = 0;
    globals.speed = 0;
    globals.score = 0;
    bird.circleX = 0;
    bird.circleY = 0;
    globals.rotation = 0;
    const scoreSheet = document.getElementById('scoreSheet');
    scoreSheet.style.display = 'none';
  }

  static gameOver() {
    gameState.currentState = gameState.gameOver;
    Scoreboard.saveScore();
  }

  storeGlobalVariables() {
    Game.globals = { ...globals };
  }
}
