import { Wall } from "./wall";
import { isColliding } from "./localizable";

let mapSizeX: number = 800;
let mapSizeY: number = 600;
let maxWallLen: number = 30;

function initializeWalls(count: number) {
    let walls: Wall[] = [];
    for (let i: number = 0; i < count - 1; i++) {
        let xAt = Math.round(Math.random() * mapSizeX - maxWallLen);
        let yAt = Math.round(Math.random() * mapSizeY - maxWallLen);
        let xLen = Math.round(Math.random() * maxWallLen);
        let yLen = Math.round(Math.random() * maxWallLen);
        let thickness = Math.round(Math.random() * 10);
        let newWall = new Wall(
            xAt,
            yAt,
            xAt + xLen,
            yAt + yLen,
            thickness
        )
        for (const wall of walls) {
            if (!isColli)
        }
    }
}
