import { SNAKE_SPEED, updateSnake, drawSnake } from "./snake.js";

// console.log("i am javascript");
let lastRenderTime = 0;

// let SNAKE_SPEED = 1;
const gameBoard = document.getElementById("game-board");
function main(currentTime) {
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  window.requestAnimationFrame(main);
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  console.log("render");
  lastRenderTime = currentTime;
  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
}
