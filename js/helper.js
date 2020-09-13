import playground from './playground.js';
import gameConfig from './config/game.config.js';

const getRandomNumber = (min = 1, max = 999) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { getRandomNumber };
