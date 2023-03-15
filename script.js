import { Grid } from './grid.js'
import { Tile } from './tile.js'

const gameBoard = document.getElementById('game-board')

const grid = new Grid(gameBoard)

grid.getRandomEmptyCell().linkTile(new Tile(gameBoard))
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard))
setupInputOnce();

function setupInputOnce() {
   window.addEventListener("keydown", handleInput, { once: true })
}

function handleInput(event) {
   switch (event.key) {
      case "ArrowUp":
         moveUp();
         break;
      case "ArrowDown":
         break;
      case "ArrowLeft":
         break;
      case "ArrowRight":
         break;

      default:
         setupInputOnce()
         return;
   }
   setupInputOnce()
}

function moveUp() {
   slideTiles(grid.cellsGroupedByColumn)
}

function slideTiles(groupedCells) {
   groupedCells.forEach(group => slideTilesInGroup(group))
}

function slideTilesInGroup(group) {
   for (let i = 1; i < group.length; i++) {
      if (group[i].isEmpty()) {
         continue
      }
      const cellWithTile = group[i];
      let targetCell;
      let j = i - 1;
      while (j >= 0 && group.canAccept(cellWithTile.linkedTile)) {
         targetCell = group[j];
      }
   }
}