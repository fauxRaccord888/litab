import type { DBDecoration } from "$feature/Inventory/types";
import type { IDynamicObject, IDynamicObjectConstructor } from "../../types";
import type { RgbaObject } from 'hex-rgb';
import { boxMullerRandom, createRandomizedObject, pickPointInside, staticImplements } from "$lib/utils";
import { convertRgbaToCSS } from "$feature/PentagramDecoration/util";
import { keepWithinBounds, limitSpeed } from "./common";
import { DecorationType } from "$lib/graphql/__generated__/graphql";
import { SHADOW } from "../constants";
import hexRgb from 'hex-rgb'
import rgbHex from 'rgb-hex';
import Alea from "alea";

function distance(boid1: {x: number, y: number}, boid2: {x: number, y: number}) {
    return Math.sqrt(
        (boid1.x - boid2.x) * (boid1.x - boid2.x) +
        (boid1.y - boid2.y) * (boid1.y - boid2.y),
    );
}

export class Shadow implements IDynamicObject {
    static __typename = DecorationType.Shadow
    static isBackground = false

    sides: number
    private shadows: IDynamicObject[]

    private color: RgbaObject
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

    // WARNING CAVEAT 순서 변경 주의(시드에서 추출된 난수에 의해 아이템의 옵션이 설정됨)
    static createObjectFromSeed(decoration: DBDecoration) {
        const prng = Alea(decoration.seed)
        const randomColorVal = () => Math.floor(boxMullerRandom({min: 0, max: 255, skew: 0.3, prng}))

        const obj = createRandomizedObject(SHADOW, prng)
        const color = rgbHex(randomColorVal(), randomColorVal(), randomColorVal())

        const result = Object.assign({
            color
        }, obj)
    
        return result
    }

    constructor(
        decoration: DBDecoration,
        canvas: HTMLCanvasElement, 
        shadows: IDynamicObject[], 
        sides: number,
    ) {
        const result = Shadow.createObjectFromSeed(decoration)

        this.shadows = shadows
        this.sides = sides
        
        this.color = hexRgb(result.color)
        this.centeringFactor = result.centeringFactor
        this.bodyLength = result.bodyLength
        this.matchingFactor = result.matchingFactor
        this.minDistance = result.minDistance
        this.avoidFactor = result.avoidFactor
        this.visualRange = result.visualRange
        this.turnFactor = result.turnFactor
        this.speedLimit = result.speedLimit

        const [x, y] = pickPointInside(canvas.width, canvas.height, this.sides)
        this.x = x
        this.y = y
        this.dx = this.speedLimit  * (Math.random() - 0.5)
        this.dy = this.speedLimit * (Math.random() - 0.5)
        this.body = Array.from({length: this.bodyLength}).map(() => [this.x, this.y])
    }

    draw(_c: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
    
        this.body.forEach((b, index) => {
            let size: number
            if ( index < this.bodyLength / 6 ) {
                size = (this.bodyLength / 1.5) + index * 1.8
            } else {
                size = this.bodyLength - index
            }
            const color = convertRgbaToCSS(this.color)
            ctx.moveTo(b[0], b[1])
            ctx.fillStyle = color
            ctx.fill()
            ctx.ellipse(b[0], b[1], size / 2, size / 2, 0, 0, 2 * Math.PI)
        })
    }

    update(canvas: HTMLCanvasElement) {
        this.flyTowardsCenter();
        this.avoidOthers();
        this.matchVelocity();
        limitSpeed.bind(this)();
        keepWithinBounds.bind(this, canvas)();

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
            if (!(otherBoid instanceof Shadow)) continue
            if (otherBoid === this as Shadow)  continue
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
            if (!(otherBoid instanceof Shadow)) continue
            if (otherBoid === this as Shadow)  continue
            if (distance(this, otherBoid) < this.minDistance) {
                moveX += this.x - otherBoid.x;
                moveY += this.y - otherBoid.y;
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
            if (!(otherBoid instanceof Shadow)) continue
            if (otherBoid === this as Shadow)  continue
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
staticImplements<IDynamicObjectConstructor<Shadow>>(Shadow)
