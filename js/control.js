import Game from './game.js';
import Bird from './bird.js';
import globals from './globals.js';

export default class Control {
  constructor() {
    this.init();
  }

  static option(event) {
    switch (event.keyCode) {
      case 32:
        Bird.jump();
        globals.keyPress = 1;
        break;

      default:
        break;
    }
  }

  static resetControl(event) {
    switch (event.keyCode) {
      case 32:
        globals.keyPress = 0;
    }
  }
}
