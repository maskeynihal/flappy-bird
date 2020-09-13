import gameConfig from './config/game.config.js';
import { background, ground, bird, startGame, gameOver } from './sprites.js';
import Sprite from './sprite.js';
import Control from './control.js';
import globals from './globals.js';
import gameState from './gameState.js';
import Bird from './bird.js';
import Game from './game.js';
import Background from './background.js';
import Pipe from './pipe.js';
import Scoreboard from './scoreboard.js';
export default class Playground {
  static playgroundContext;
  static sprite;
  constructor() {
    this.build();
  }

  build() {
    this.playgroundCanvas = document.getElementById('playground');
    this.playgroundCanvas.width = gameConfig.canvasWidth;
    this.playgroundCanvas.height = gameConfig.canvasHeight;
    Playground.playgroundContext = this.playgroundCanvas.getContext('2d');
    document.addEventListener('keydown', (event) => {
      Control.option(event);
    });
    document.addEventListener('keyup', (event) => {
      Control.resetControl(event);
    });

    this.createStartButton();
    this.loadSpriteImage();
    this.bird = new Bird();
    this.background = new Background();
    this.pipe = new Pipe();
    this.scoreboard = new Scoreboard();
  }

  loadSpriteImage() {
    Playground.sprite = new Image();
    Playground.sprite.src = gameConfig.spriteUrl;
    Playground.sprite.onload = () => {
      this.draw();
      this.loop();
    };
  }

  createStartButton() {
    const main = document.getElementById('flappyBird');
    const startButton = document.createElement('div');
    // startButton.style.border = '1px solid black';
    startButton.style.width = '100px';
    startButton.style.height = '57px';
    startButton.style.position = 'absolute';
    startButton.style.top = '325px';
    startButton.style.left = '90px';
    main.appendChild(startButton);

    startButton.addEventListener('click', () => {
      if (
        gameState.currentState === gameState.gameOver ||
        gameState.currentState === gameState.start
      ) {
        this.reset();
        Game.start();
      }
    });
  }

  draw() {
    background.draw();
    bird.draw();
    startGame.draw();
    gameOver.draw();
    this.pipe.draw();
    ground.draw();
    this.scoreboard.draw();
  }

  update() {
    Playground.playgroundContext.clearRect(
      0,
      0,
      gameConfig.canvasWidth,
      gameConfig.canvasHeight
    );
    this.bird.update();
    this.pipe.update();
    this.background.update();
  }

  loop() {
    globals.loops++;
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }

  reset() {
    if (gameState.currentState === gameState.gameOver) {
      this.bird.reset();
      this.pipe.reset();
    }
  }
}
