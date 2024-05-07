import type { IDynamicObject } from "../../../../Inventory/types";
import type { Cosmos } from ".";
import type { RgbaObject } from 'hex-rgb';
import { convertRgbaToCSS, pickRandomElementFromArray } from "../../../util";
import hexRgb from 'hex-rgb'

export class ShootingStar implements IDynamicObject {
    private colors: RgbaObject[]
    private x: number;
    private y: number;
    private length: number;
    private speed: number;
    private size: number;
    private nextActivateTime: number;
    private active: boolean;
    private color: string;

    constructor(
        options: ReturnType<typeof Cosmos["createObjectFromSeed"]>, 
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
        this.nextActivateTime = new Date().getTime() + (Math.random() * 10000) + 1000
        this.active = false
        this.color = convertRgbaToCSS(
            pickRandomElementFromArray(this.colors)
        );
    }

    update(canvas: HTMLCanvasElement) {
        if (this.active) {
            this.x -= this.speed;
            this.y += this.speed;
        }

        if (this.x < 0 || this.y >= canvas.height) {
            this.initialize(canvas)
        }

        if (this.nextActivateTime < new Date().getTime()) {
            this.active = true;
        }
    }

    draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        if (this.active) {
            ctx.strokeStyle = this.color;
            ctx.fillStyle = this.color;
            
            ctx.fillRect(this.x-1, this.y-1, 2, 2);
            ctx.lineCap = "round";
            ctx.lineWidth = this.size;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(Math.min(this.x + this.length, canvas.width), Math.max(this.y - this.length, 0));
            ctx.stroke();
        }
    }
}