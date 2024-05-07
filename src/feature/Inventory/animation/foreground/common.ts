import type { Shadow } from './Shadow';
import { isInside } from '$feature/Pentagram/utils';

export function keepWithinBounds(this: Shadow, canvas: HTMLCanvasElement) {
    const MARGIN = 12;
    const radius = canvas.width / 2
    const midWidth = canvas.width / 2
    const midHeight = canvas.height / 2
    const isOnVerge = !isInside(this.y - midHeight, this.x - midWidth, radius - MARGIN, this.sides)

    if (isOnVerge && this.x < midWidth) {
        this.dx += this.turnFactor;
    }
    if (isOnVerge && this.x > midWidth) {
        this.dx -= this.turnFactor
    }
    if (isOnVerge && this.y < midHeight) {
        this.dy += this.turnFactor;
    }
    if (isOnVerge && this.y > midHeight) {
        this.dy -= this.turnFactor;
    }
}

export function limitSpeed(this: Shadow) {
    const speed = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    if (speed > this.speedLimit) {
        this.dx = (this.dx / speed) * this.speedLimit;
        this.dy = (this.dy / speed) * this.speedLimit;
    }
}
