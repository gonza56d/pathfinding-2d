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
