let mapSizeX: number = 800;
let mapSizeY: number = 600;
let maxWallLen: number = 30;

export class Wall {
    from_x: number;
    from_y: number;
    to_x: number;
    to_y: number;
    size: number;

    constructor(from_x: number, from_y: number, to_x: number, to_y: number, size: number) {
        this.from_x = from_x;
        this.from_y = from_y;
        this.to_x = to_x;
        this.to_y = to_y;
        this.size = size;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = "black";
        ctx.lineWidth = this.size;
        ctx.beginPath();
        ctx.moveTo(this.from_x, this.from_y);
        ctx.lineTo(this.to_x, this.to_y);
        ctx.stroke();
    }
}

export function initializeWalls(count: number): Wall[] {
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
        );
        walls.push(newWall);
    }
    return walls;
}
