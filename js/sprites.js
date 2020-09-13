import gameConfig from './config/game.config.js';
import Playground from './playground.js';
import Sprite from './sprite.js';
import { drawImage } from './gameHelper.js';
import gameState from './gameState.js';
import globals from './globals.js';
const background = {
  sX: 0,
  sY: 0,
  width: 144,
  height: 250,
  x: 0,
  y: 0,
  changeInX: 1,

  draw: function () {
    Playground.playgroundContext.drawImage(
      Playground.sprite,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.x,
      this.y,
      gameConfig.canvasWidth,
      gameConfig.canvasHeight
    );
    Playground.playgroundContext.drawImage(
      Playground.sprite,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.x + gameConfig.canvasWidth,
      this.y,
      gameConfig.canvasWidth,
      gameConfig.canvasHeight
    );
  },
};

const ground = {
  sX: 293,
  sY: 0,
  width: 150,
  height: 55,
  x: 0,
  y: gameConfig.canvasHeight - 110,
  changeInX: 2,
  draw: function () {
    Playground.playgroundContext.drawImage(
      Playground.sprite,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.x,
      this.y,
      gameConfig.canvasWidth,
      this.height * 2
    );
    Playground.playgroundContext.drawImage(
      Playground.sprite,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.x + gameConfig.canvasWidth,
      this.y,
      gameConfig.canvasWidth,
      this.height * 2
    );
  },
};

const bird = {
  animation: [
    { sX: 115, sY: 329 },
    { sX: 115, sY: 355 },
    { sX: 87, sY: 491 },
  ],
  width: 17,
  height: 12,
  x: gameConfig.canvasWidth / 2 - 17,
  y: 250,
  w: 17 * 2,
  h: 12 * 2,
  radius: 15,
  birdStyle: 0,
  circleX: gameConfig.canvasWidth / 2 - 17,
  circleY: 250,
  rotateBird: 45,
  draw: function () {
    this.circleX = this.x + 17;
    this.circleY = this.y + 12;
    let bird = this.animation[this.birdStyle];
    var ctx = Playground.playgroundContext;
    Playground.playgroundContext.save();
    Playground.playgroundContext.translate(this.x, this.y);
    Playground.playgroundContext.rotate(this.rotateBird);
    Playground.playgroundContext.drawImage(
      Playground.sprite,
      bird.sX,
      bird.sY,
      this.width,
      this.height,
      this.width * Math.cos(this.rotateBird) +
        this.height * Math.sin(this.rotateBird) -
        17,
      this.height * Math.cos(this.rotateBird) -
        this.width * Math.sin(this.rotateBird) -
        12,
      this.w,
      this.h
    );
    Playground.playgroundContext.restore();
  },
};

const startGame = {
  sX: 295,
  sY: 59,
  width: 92,
  height: 25,
  x: gameConfig.canvasWidth / 2 - 92,
  y: gameConfig.canvasHeight / 2 - 150,
  changeInX: 2,
  draw: function () {
    if (gameState.currentState === gameState.start) {
      Playground.playgroundContext.drawImage(
        Playground.sprite,
        this.sX,
        this.sY,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width * 2,
        this.height * 2
      );
      Playground.playgroundContext.drawImage(
        Playground.sprite,
        354,
        118,
        114,
        32,
        gameConfig.canvasWidth / 2 - 114,
        gameConfig.canvasHeight / 2,
        228,
        64
      );
    }
  },
};

const gameOver = {
  sX: 2,
  sY: 259,
  width: 115,
  height: 58,
  x: gameConfig.canvasWidth / 2 - 115,
  y: gameConfig.canvasHeight / 2 - 150,
  draw: function () {
    if (gameState.currentState == gameState.gameOver) {
      Playground.playgroundContext.drawImage(
        Playground.sprite,
        this.sX,
        this.sY,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width * 2,
        this.height * 2
      );
      Playground.playgroundContext.drawImage(
        Playground.sprite,
        354,
        118,
        114,
        32,
        gameConfig.canvasWidth / 2 - 114,
        gameConfig.canvasHeight / 2,
        228,
        64
      );
    }
  },
};
const pipe = {
  bottom: {
    sX: 84,
    sY: 323,
  },
  top: {
    sX: 57,
    sY: 323,
  },
  width: 26,
  height: 160,
  gapBetweenPipes: 90,
  x: gameConfig.canvasWidth,
  w: 52,
  h: 320,
  changeInX: 2,
};

export { background, ground, bird, startGame, gameOver, pipe };
