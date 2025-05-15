import { initializeWalls, Wall } from "./wall";
import { canvas, createGrid, GRID_SIZE } from "./grid";
import { Player } from "./npc";
import aStar from "a-star";

const walls = initializeWalls(5);
const grid = createGrid(walls);
const player = new Player();

canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const goalX = Math.floor(clickX / GRID_SIZE);
    const goalY = Math.floor(clickY / GRID_SIZE);

    const startX = Math.floor(player.x / GRID_SIZE);
    const startY = Math.floor(player.y / GRID_SIZE);

    const path = aStar.aStar(grid)
    if (path) {
        // TOOD player.setPath
    }
});
