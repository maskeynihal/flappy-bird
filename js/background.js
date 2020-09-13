import gameState from './gameState.js';
import { background, ground } from './sprites.js';
import gameConfig from './config/game.config.js';

export default class Background {
  constructor() {}

  update() {
    if (gameState.currentState === gameState.playing) {
      background.x =
        (background.x - background.changeInX) % gameConfig.canvasWidth;
      ground.x = (ground.x - ground.changeInX) % gameConfig.canvasWidth;
    }
  }
}
