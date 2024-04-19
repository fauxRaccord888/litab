import type { IDynamicObject } from '../../common/types';

type StarOptions = {
    speedParam: number,
    sizeParam: number    
}

export class Star implements IDynamicObject {
    private ctx: CanvasRenderingContext2D
    private canvas: HTMLCanvasElement

    size: number
    speed: number
    x: number
    y: number

    constructor(
        options: StarOptions, 
        canvas: HTMLCanvasElement, 
        ctx: CanvasRenderingContext2D
    ) {
        this.canvas = canvas
        this.ctx = ctx

        this.size = Math.random() * options.sizeParam,
        this.speed = Math.random() * options.speedParam,
        this.x = Math.random() * canvas.width,
        this.y = Math.random() * canvas.height
    }

    update() {
        this.x = (this.x - this.speed + this.canvas.width) % this.canvas.width
    }

    draw() {
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}