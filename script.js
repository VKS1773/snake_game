import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outSideGrid } from "./grid.js";
// console.log("i am javascript");
import { outSideGrid } from "./grid.js";
let lastRenderTime = 0;
// let SNAKE_SPEED = 1;
const gameBoard = document.getElementById("game-board");
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    return alert("YOU LOSE");
  }
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
  updateFood();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outSideGrid() || snakeIntersection();
}
