import { AStarFinder } from 'astar-typescript';
import { canvas, drawGrid, Grid } from "./grid";
import { Player } from "./player";

const grid = new Grid();
const player = new Player(canvas.width / 2, canvas.height / 2, 5, 1);
const aStarFinder = new AStarFinder({
    grid: {
        matrix: grid.cells.map(row => 
            row.map(cell => (cell.walkable ? 0 : 1))
        )
    }
});
let pathway: number[][]= [[]];
let currentStep = 0;

canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const startPos = {
        x: Math.floor(clickX / grid.cellSize),
        y: Math.floor(clickY / grid.cellSize),
    }
    const goalPos = {
        x: Math.floor(player.x / grid.cellSize),
        y: Math.floor(player.y / grid.cellSize),
    }
    currentStep = 0;
    pathway = aStarFinder.findPath(startPos, goalPos)
});

function moveCharacter() {
    if (currentStep < pathway.length) {
	    const [x, y] = pathway[currentStep];
        const cellCenter = grid.getCellCenter(x, y); 
	    character.setPosition();
	    currentStep++;
	}
}

function gameLoop() {
    drawGrid();
	requestAnimationFrame(gameLoop);
}

gameLoop();
