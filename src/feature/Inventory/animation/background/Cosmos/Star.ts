import type { IDynamicObject } from '../../../../Inventory/types';
import type { Cosmos } from '.';

export class Star implements IDynamicObject {
    private size: number
    private speed: number
    private x: number
    private y: number

    constructor(
        options: ReturnType<typeof Cosmos["createObjectFromSeed"]>, 
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