import gameConfig from './config/game.config.js';

export default class Sprite {
  constructor() {
    this.init();
  }

  init() {
    const sprite = new Image();
    sprite.src = gameConfig.spriteUrl;
  }
}
