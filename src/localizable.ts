import { Wall } from "./wall";

export class Localizable {
    x: number;
    y: number;
    size: number;
    speed: number;

    constructor(x: number, y: number, size: number, speed: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }
}

export function isColliding(a: Localizable, b: Localizable) {
    const distance = getDistance(a, b);
    return distance < a.size - b.size;
}

export function isCollidingWithWall(circle: Localizable, wall: Wall) {
    const p = closestPointOnSegment(circle.x, circle.y, wall.from_x, wall.from_y, wall.to_x, wall.to_y);
    return isColliding(circle, new Localizable(p.x, p.y, wall.size, 0))
}

export function closestPointOnSegment(px: number, py: number, x1: number, y1: number, x2: number, y2: number) {
	const dx = x2 - x1;
	const dy = y2 - y1;
	const l2 = dx * dx + dy * dy;
	if (l2 === 0) return { x: x1, y: y1 }; // segment is a point
	const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / l2));
	return { x: x1 + t * dx, y: y1 + t * dy };
}

export function getDistance(a: Localizable, b: Localizable) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
}
