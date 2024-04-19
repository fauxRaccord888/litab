import type { DBBoids } from "../types";
import type { IDynamicObject } from "../../common/types";
import { pickPointInside } from "$lib/utils";
import { keepWithinBounds, limitSpeed } from "./common";

function distance(boid1: {x: number, y: number}, boid2: {x: number, y: number}) {
    return Math.sqrt(
        (boid1.x - boid2.x) * (boid1.x - boid2.x) +
        (boid1.y - boid2.y) * (boid1.y - boid2.y),
    );
}

export class Shadow implements IDynamicObject {
    ctx: CanvasRenderingContext2D
    canvas: HTMLCanvasElement
    sides: number
    private shadows: Shadow[]

    private color: (number | null)[]
    private bodyLength: number
    private centeringFactor: number
    private matchingFactor: number
    private minDistance: number
    private avoidFactor: number
    private visualRange: number
    turnFactor: number
    speedLimit: number

    x: number
    y: number
    dx: number
    dy: number
    private body: [number, number][]

    constructor(
        seed: DBBoids,
        shadows: Shadow[], 
        sides: number,
        canvas: HTMLCanvasElement, 
        ctx: CanvasRenderingContext2D, 
    ) {
        this.shadows = shadows
        this.sides = sides
        this.canvas = canvas
        this.ctx = ctx
        
        this.color = seed.color
        this.centeringFactor = seed.centeringFactor
        this.bodyLength = seed.bodyLength
        this.matchingFactor = seed.matchingFactor
        this.minDistance = seed.minDistance
        this.avoidFactor = seed.avoidFactor
        this.visualRange = seed.visualRange
        this.turnFactor = seed.turnFactor
        this.speedLimit = seed.speedLimit

        const [x, y] = pickPointInside(this.canvas.width, this.canvas.height, this.sides)
        this.x = x
        this.y = y
        this.dx = this.speedLimit  * (Math.random() - 0.5)
        this.dy = this.speedLimit * (Math.random() - 0.5)
        this.body = Array.from({length: this.bodyLength}).map(() => [this.x, this.y])
    }

    draw() {
        this.ctx.beginPath();
    
        this.body.forEach((b, index) => {
            let size
            if ( index < this.bodyLength / 6 ) {
                size = (this.bodyLength / 1.5) + index * 1.8
            } else {
                size = this.bodyLength - index
            }
            const color = `rgba(${this.color.join(",")}, ${this.bodyLength - index})`
            this.ctx.moveTo(b[0], b[1])
            this.ctx.fillStyle = color
            this.ctx.fill()
            this.ctx.ellipse(b[0], b[1], size / 2, size / 2, 0, 0, 2 * Math.PI)
        })
    }

    update() {
        this.flyTowardsCenter();
        this.avoidOthers();
        this.matchVelocity();
        limitSpeed.bind(this)();
        keepWithinBounds.bind(this)();

        this.x += this.dx;
        this.y += this.dy;

        this.updateBody()
    }

    private updateBody() {
        this.body.pop()
        this.body.unshift([this.x, this.y])
    }

    private flyTowardsCenter() {
        let centerX = 0;
        let centerY = 0;
        let numNeighbors = 0;
    
        for (const otherBoid of this.shadows) {
            if (distance(this, otherBoid) < this.visualRange) {
                centerX += otherBoid.x;
                centerY += otherBoid.y;
                numNeighbors += 1;
            }
        }
    
        if (numNeighbors) {
            centerX = centerX / numNeighbors;
            centerY = centerY / numNeighbors;
    
            this.dx += (centerX - this.x) * this.centeringFactor;
            this.dy += (centerY - this.y) * this.centeringFactor;
        }
    }
    
    private avoidOthers() {
        let moveX = 0;
        let moveY = 0;
        for (const otherBoid of this.shadows) {
            if (otherBoid !== this) {
                if (distance(this, otherBoid) < this.minDistance) {
                    moveX += this.x - otherBoid.x;
                    moveY += this.y - otherBoid.y;
                }
            }
        }
    
        this.dx += moveX * this.avoidFactor;
        this.dy += moveY * this.avoidFactor;
    }

    private matchVelocity() {
        let avgDX = 0;
        let avgDY = 0;
        let numNeighbors = 0;
    
        for (const otherBoid of this.shadows) {
            if (distance(this, otherBoid) < this.visualRange) {
                avgDX += otherBoid.dx;
                avgDY += otherBoid.dy;
                numNeighbors += 1;
            }
        }
    
        if (numNeighbors) {
            avgDX = avgDX / numNeighbors;
            avgDY = avgDY / numNeighbors;
    
            this.dx += (avgDX - this.dx) * this.matchingFactor;
            this.dy += (avgDY - this.dy) * this.matchingFactor;
        }
    }
}
