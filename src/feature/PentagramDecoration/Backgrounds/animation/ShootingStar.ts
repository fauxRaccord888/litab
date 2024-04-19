import { IDynamicObject } from "../../common/types";

export class ShootingStar implements IDynamicObject {
    private ctx: CanvasRenderingContext2D
    private canvas: HTMLCanvasElement

    x: number;
    y: number;
    length: number;
    speed: number;
    size: number;
    waitTime: number;
    active: boolean;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas
        this.ctx = ctx

        // TODO initialize 메서드 쓰면서 undefined 안 시키는 방법 찾기
        this.x = Math.random() * this.canvas.width,
        this.y = 0,
        this.length = (Math.random() * 15) + 5,
        this.speed = (Math.random() * 10) + 6,
        this.size = (Math.random() * 2) + 0.5,
        this.waitTime = new Date().getTime() + (Math.random() * 3000) + 500,
        this.active = false
    }

    initialize() {
        this.x = Math.random() * this.canvas.width,
        this.y = 0,
        this.length = (Math.random() * 80) + 10,
        this.speed = (Math.random() * 10) + 6,
        this.size = (Math.random() * 1) + 0.1,
        this.waitTime = new Date().getTime() + (Math.random() * 3000) + 500,
        this.active = false
    }

    update() {
        this.x -= this.speed;
        this.y += this.speed;
        if (this.x < 0 || this.y >= this.canvas.height) {
            this.initialize()
        }

        if (this.waitTime < new Date().getTime()) {
            this.active = true;
        }
    }

    draw() {
        if (this.active) {
            this.ctx.strokeStyle = '#ffffff';
            this.ctx.lineCap = "round";
            this.ctx.lineWidth = this.size;
            this.ctx.beginPath();
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(this.x + this.length, this.y - this.length);
            this.ctx.stroke();
        }
    }
}