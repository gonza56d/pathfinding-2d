import { warn } from "console";

export const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;


type Cell = {
    x: number;
    y: number;
    walkable: boolean; // 0 = walkable, 1 = not walkable (aStar impl)
}

export class Grid {
	cols: number;
	rows: number;
	cellSize: number;
	cells: Cell[][];

	constructor() {
		this.cellSize = 10;
		this.cols = canvas.width / this.cellSize;
		this.rows = canvas.height / this.cellSize;

		this.cells = [];

		for (let y = 0; y < this.rows; y++) {
			const row: Cell[] = [];
			for (let x = 0; x < this.cols; x++) {
				row.push({
					x,
					y,
					walkable: true,
				});
			}
			this.cells.push(row);
		}
	}

	getCell(x: number, y: number): Cell | null {
        if (x < 0 || x >= this.cols || y < 0 || y >= this.rows) {
            throw new Error(`Cell out of bounds: (${x}, ${y})`);
        }
		return this.cells[y][x];
	}

	getCellCenter(x: number, y: number): { px: number; py: number } | null {
        if (x < 0 || x >= this.cols || y < 0 || y >= this.rows) {
            throw new Error(`Cell out of bounds: (${x}, ${y})`);
        }
		const px = x * this.cellSize + this.cellSize / 2;
		const py = y * this.cellSize + this.cellSize / 2;
		return { px, py };
	}

	setWalkable(x: number, y: number, walkable: boolean): void {
		const cell = this.getCell(x, y);
		if (cell) cell.walkable = walkable;
	}
}

export function drawGrid() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
