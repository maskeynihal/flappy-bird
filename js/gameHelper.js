import gameConfig from './config/game.config.js';
import Playground from './playground.js';
const drawImage = (image, sX, sY, sWidth, sHeight, x, y, width, height) => {
  Playground.playgroundContext.drawImage(
    image,
    sX,
    sY,
    width,
    height,
    x,
    y,
    width,
    height
  );
};
export { drawImage };
