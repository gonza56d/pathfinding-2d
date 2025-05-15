import { closestPointOnSegment } from "./localizable";
import { Wall } from "./wall";

export const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const PLAYER_SIZE = 5
export const GRID_SIZE = 20;
const ROWS = canvas.height / GRID_SIZE;
const COLS = canvas.width / GRID_SIZE;

export function createGrid(walls: Wall[]) {
    const grid: { walkable: boolean, x: number, y: number }[][] = [];
    for (let y = 0; y < ROWS; y++) {
        grid[y] = [];
        for (let x = 0; x < COLS; x++) {
            const centerX = x * GRID_SIZE + GRID_SIZE / 2;
            const centerY = y * GRID_SIZE + GRID_SIZE / 2;
            let walkable = true;
            for (const wall of walls) {
                const closest = closestPointOnSegment(centerX, centerY, wall.from_x, wall.from_y, wall.to_x, wall.to_y);
                const dist = Math.hypot(centerX - closest.x, centerY - closest.y);
                if (dist < wall.size + PLAYER_SIZE) {
                    walkable = false;
                    break;
                }
            }
            grid[y][x] = { walkable, x, y };
        }
    }
    return grid;
}
