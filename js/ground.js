import gameState from './gameState.js';
import { ground } from './sprites.js';
import gameConfig from './config/game.config.js';

export default class Ground {
  constructor() {}

  update() {
    if (gameState.currentState === gameState.playing) {
      ground.x = (ground.x - ground.changeInX) % gameConfig.canvasWidth;
    }
  }
}
