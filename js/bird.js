import { bird } from './sprites.js';
import gameState from './gameState.js';
import globals from './globals.js';
import gameConfig from './config/game.config.js';
import Game from './game.js';
export default class Bird {
  constructor() {
    this.bird = bird;
  }

  update() {
    let speedOfFlap = gameState.currentState === gameState.start ? 3 : 10;
    this.bird.birdStyle += globals.loops % speedOfFlap === 0 ? 1 : 0;
    this.bird.birdStyle = this.bird.birdStyle % this.bird.animation.length;
    this.birdMoveLogic();
  }

  birdMoveLogic() {
    if (gameState.currentState === gameState.start) {
      this.bird.y = 250;
      this.bird.rotateBird = 0;
    }

    if (gameState.currentState === gameState.playing) {
      globals.speed += globals.gravity;
      this.bird.y += Math.round(globals.speed);
      this.bird.circleY = this.bird.y + 12;
      if (
        this.bird.circleY + this.bird.radius >=
        gameConfig.canvasHeight - 110
      ) {
        this.bird.y = gameConfig.canvasHeight - 134;
        Game.gameOver();
      }

      if (globals.speed < 0) {
        this.bird.rotateBird = -25 * globals.radian;
        globals.rotation = 0;
      } else {
        this.bird.rotateBird = globals.rotation * globals.radian;
      }
      if (globals.rotation != 90) {
        globals.rotation += 5;
      }
    }
  }

  reset() {
    this.bird.y = 250;
  }

  static jump() {
    if (globals.keyPress === 0) {
      globals.speed = -globals.jump;
    }
  }
}
