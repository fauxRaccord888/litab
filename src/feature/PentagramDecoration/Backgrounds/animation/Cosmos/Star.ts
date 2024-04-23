import type { IDynamicObject } from '../../../types';
import type { DBCosmos } from '../../types';

export class Star implements IDynamicObject {
    size: number
    speed: number
    x: number
    y: number

    constructor(
        options: DBCosmos, 
        canvas: HTMLCanvasElement, 
    ) {
        this.size = Math.random() * options.sizeParam
        this.speed = Math.random() * options.speedParam
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
    }

    update(canvas: HTMLCanvasElement) {
        this.x = (this.x - this.speed + canvas.width) % canvas.width
    }

    draw(_c: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}