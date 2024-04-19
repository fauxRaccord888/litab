import type { IDynamicObject } from "$feature/PentagramDecoration/common/types";
import { pickPointInside } from "$lib/utils";
import { keepWithinBounds, limitSpeed } from "./common";

type SpiralOptions = {
    color: number[]
    size: number
    speedLimit: number
    petal: number
}

export class Spiral implements IDynamicObject {
    ctx: CanvasRenderingContext2D
    canvas: HTMLCanvasElement
    sides: number
    private color: number[]

    private angle: number
    private width: number
    private height: number
    private petal: number
    x: number
    y: number
    dx: number
    dy: number
    speedLimit: number
    turnFactor: number

    constructor(
        options: SpiralOptions, 
        sides: number,
        canvas: HTMLCanvasElement, 
        ctx: CanvasRenderingContext2D
    ) {
        this.canvas = canvas
        this.ctx = ctx
        this.sides = sides

        this.color = options.color
        this.speedLimit = options.speedLimit ,
        this.petal = options.petal
        this.width = options.size,
        this.height = this.width * 0.35
        
        const [x, y] = pickPointInside(this.canvas.width, this.canvas.height, this.sides)
        this.x = x
        this.y = y
        this.dx = this.speedLimit  * (Math.random() - 0.5)
        this.dy = this.speedLimit * (Math.random() - 0.5)
        this.turnFactor = this.speedLimit * 1.2
        this.angle = 0
    }

    draw() {     
        for (let i = 0; i < this.petal; i++) {
          this.ctx.save();
          this.ctx.translate(this.x, this.y);
          this.ctx.rotate(this.angle + i * 0.8)
      
          this.ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${(0.1 * (i + 1))})`

          this.ctx.beginPath();
          const width = this.width - (i * 0.05 * this.width);
          const height = this.height; 

          this.ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
          this.ctx.fill();
      
          this.ctx.restore();
        }

        for (let i = 0; i < this.petal; i++) {
            this.ctx.save();
            this.ctx.translate(this.x, this.y);
            this.ctx.rotate(this.angle * i)
        
            this.ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${(0.1 * (i + 1))})`
  
            this.ctx.beginPath();
            const width = this.width - (i * 0.05 * this.width);
            const height = this.height; 
  
            this.ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        }
    }
    

    update() {
        keepWithinBounds.bind(this)();
        limitSpeed.bind(this)();
        
        this.angle += 0.08
        this.x += this.dx
        this.y += this.dy
    }
}