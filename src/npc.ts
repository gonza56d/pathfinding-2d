import { Localizable } from "./localizable";
import { Wall } from "./wall";

export class Player extends Localizable {

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "purple";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    moveToObjective(x: number, y: number, walls: Wall[]) {
        
    }
}
