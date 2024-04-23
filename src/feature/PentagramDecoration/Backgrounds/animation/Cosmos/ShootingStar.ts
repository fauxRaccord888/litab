import type { IDynamicObject } from "../../../types";
import type { DBCosmos } from "../../types";
import type { RgbaObject } from 'hex-rgb';
import { convertRgbaToCSS, pickRandomElementFromArray } from "../../../util";
import hexRgb from 'hex-rgb'

export class ShootingStar implements IDynamicObject {
    private colors: RgbaObject[]
    x: number;
    y: number;
    length: number;
    speed: number;
    size: number;
    waitTime: number;
    active: boolean;

    constructor(
        options: DBCosmos, 
        canvas: HTMLCanvasElement, 
    ) {
        this.colors =  options.shootingStarColors.map((c) => c ? hexRgb(c) : hexRgb("#aa00aa"))
        this.initialize(canvas)
    }

    initialize(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width * 1.5
        this.y = 0
        this.length = (Math.random() * 15) + 8
        this.speed = (Math.random() * 5) + 7
        this.size = (Math.random() * 0.35) + 0.15
        this.waitTime = new Date().getTime() + (Math.random() * 10000) + 1000
        this.active = false
    }

    update(canvas: HTMLCanvasElement) {
        if (this.active) {
            this.x -= this.speed;
            this.y += this.speed;
        }

        if (this.x < 0 || this.y >= canvas.height) {
            this.initialize(canvas)
        }

        if (this.waitTime < new Date().getTime()) {
            this.active = true;
        }
    }

    draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        if (this.active) {
            const color = convertRgbaToCSS(pickRandomElementFromArray(this.colors));
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            
            ctx.fillRect(this.x-0.75, this.y-0.75, 1.5, 1.5);
            ctx.lineCap = "round";
            ctx.lineWidth = this.size;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(Math.min(this.x + this.length, canvas.width), Math.max(this.y - this.length, 0));
            ctx.stroke();
        }
    }
}