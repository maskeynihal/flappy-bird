import Playground from './playground.js';
import gameState from './gameState.js';
import Scoreboard from './scoreboard.js';
export default class ScoreSheet {
  constructor() {
    this.scoreSheet = null;
    this.createButton();
    this.createScoreSheet();
  }

  createScoreSheet() {
    const main = document.getElementById('flappyBird');
    this.scoreSheet = document.createElement('div');
    this.scoreSheet.style.display = 'none';
    this.scoreSheet.setAttribute('id', 'scoreSheet');
    this.scoreSheet.classList.add('score-sheet');
    main.appendChild(this.scoreSheet);
  }

  createButton() {
    const main = document.getElementById('flappyBird');
    const scoreSheetButton = document.createElement('div');
    scoreSheetButton.style.width = '100px';
    scoreSheetButton.style.height = '57px';
    scoreSheetButton.style.position = 'absolute';
    scoreSheetButton.style.top = '325px';
    scoreSheetButton.style.left = '210px';
    main.appendChild(scoreSheetButton);
    scoreSheetButton.addEventListener('click', () => {
      this.showScoreSheet();
    });
  }

  showScoreSheet() {
    const scoreSheet = document.getElementById('scoreSheet');
    if (
      (gameState.currentState === gameState.start || gameState.gameOver) &&
      scoreSheet.style.display != 'block'
    ) {
      scoreSheet.style.display = 'block';
      const scores = Scoreboard.getScores();
      const length = Math.min(scores.length, 10);
      let htmlToBeAdded = '';
      for (let index = 0; index < length; index++) {
        htmlToBeAdded += `<li> <span>${index + 1}.</span> ${
          scores[index]
        } </li>`;
      }
      this.scoreSheet.innerHTML = htmlToBeAdded;
    }
  }
}
