import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outSideGrid } from "./grid.js";
// console.log("i am javascript");
let lastRenderTime = 0;
// let SNAKE_SPEED = 1;
const gameBoard = document.getElementById("game-board");
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    if (confirm("you lost, press key to restart")) {
      //okay true
      window.location = "/";
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  update();
  draw();
}

window.requestAnimationFrame(main);

//update snake
function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

//draw game
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
}
