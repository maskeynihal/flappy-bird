import { pipe, bird } from './sprites.js';
import gameState from './gameState.js';
import globals from './globals.js';
import { getRandomNumber } from './helper.js';
import Playground from './playground.js';
import gameConfig from './config/game.config.js';
import Game from './game.js';

export default class Pipe {
  constructor() {
    this.pipe = pipe;
    this.pipePositions = [];
  }

  draw() {
    if (gameState.currentState === gameState.playing) {
      this.pipePositions.forEach((pipePosition) => {
        let topY = pipePosition.yPosition;
        let bottomY =
          pipePosition.yPosition + pipe.gapBetweenPipes + this.pipe.h;
        Playground.playgroundContext.drawImage(
          Playground.sprite,
          this.pipe.top.sX,
          this.pipe.top.sY,
          this.pipe.width,
          this.pipe.height,
          pipePosition.xPosition,
          topY,
          this.pipe.w,
          this.pipe.h
        );
        Playground.playgroundContext.drawImage(
          Playground.sprite,
          this.pipe.bottom.sX,
          this.pipe.bottom.sY,
          this.pipe.width,
          this.pipe.height,
          pipePosition.xPosition,
          bottomY,
          this.pipe.w,
          this.pipe.h
        );
      });
    }
  }

  update() {
    if (
      gameState.currentState === gameState.start ||
      gameState.currentState === gameState.gameOver
    ) {
      return;
    }

    if (globals.loops % 80 === 0) {
      let newPipePosition = {
        xPosition: gameConfig.canvasWidth,
        yPosition: getRandomNumber(-180, -20),
      };
      this.pipePositions.push(newPipePosition);
    }

    for (let index = 0; index < this.pipePositions.length; index++) {
      const element = this.pipePositions[index];

      element.xPosition -= this.pipe.changeInX;

      //check collision with top pipe
      if (
        bird.circleX + bird.radius + bird.radius > element.xPosition &&
        bird.circleX - bird.radius < element.xPosition + this.pipe.w &&
        bird.circleY + bird.radius > element.yPosition &&
        bird.circleY - bird.radius < element.yPosition + this.pipe.h
      ) {
        Game.gameOver();
      }

      //check for collision with bottom pipe
      if (
        bird.circleX + bird.radius > element.xPosition &&
        bird.circleX - bird.radius < element.xPosition + this.pipe.w &&
        bird.circleY + bird.radius >
          this.pipe.h + this.pipe.gapBetweenPipes + element.yPosition &&
        bird.circleY - bird.radius <
          this.pipe.h +
            this.pipe.gapBetweenPipes +
            element.yPosition +
            this.pipe.h
      ) {
        Game.gameOver();
      }

      if (bird.circleY - bird.radius <= 0) {
        Game.gameOver();
      }

      if (globals.loops % 100 === 0) {
        globals.score++;
      }

      //remove pipe after out of frame
      if (element.xPosition + this.pipe.w <= 0) {
        this.pipePositions.splice(index, 1);
      }
    }
  }

  reset() {
    this.pipe = pipe;
    this.pipePositions = [];
  }
  checkCollision() {}
}
