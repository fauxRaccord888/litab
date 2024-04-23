import type { IDynamicObject, IDynamicObjectConstructor } from "$feature/PentagramDecoration/types";
import type { InventoryEntities } from "$feature/Inventory/types";
import type { DBWorley } from "../types";
import type { RgbaObject } from 'hex-rgb';
import { createRandomizedObject, randomColorVal, staticImplements } from "$lib/utils";
import { t } from "i18next";
import { WORLEY } from './../constants/worley';
import { CustomTypeError } from "$lib/error/customError/TypeError";
import rgbHex from "rgb-hex"
import hexRgb from 'hex-rgb'

type Point = {
    curX: number,
    curY: number,
    xLower: number,
    yLower: number,
    initialX: number,
    initialY: number,
    seed: number
}

export class Worley implements IDynamicObject {
    static __typename = "Worley" as const
    static frameLen = 20

    private gridCount: number
    private color: RgbaObject
    private movementParam: number
    private limit: number

    private points: Point[][]
    private frame: number
    private frameData: ImageData[]

    static createSeed() {
        const obj = createRandomizedObject(WORLEY)
        const skew = 0.25
        const result = Object.assign({
            name: t('pentagramDecoration.worley.value.newRecord'),
            color: rgbHex(
                randomColorVal(0, 18, skew), randomColorVal(0, 55, skew), randomColorVal(80, 105, skew)
            )
        }, obj)
    
        return result
    }
    
    constructor(
        seed: InventoryEntities,
        canvas: HTMLCanvasElement, 
    ) {
        if (seed.__typename !== "Worley") {
            throw new CustomTypeError()
        }

        this.color = hexRgb(seed.color)
        this.gridCount = seed.gridCount
        this.movementParam = seed.movementParam
        this.limit = seed.limit

        this.frame = 0
        this.frameData = [] 
        this.points = []

        this.initializePoints(canvas)
    }

    update(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.frame = ( this.frame + 1 ) % Worley.frameLen
        this.updatePoints(canvas)
        this.updateFrameData(canvas, ctx)
    }

    draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        const width = canvas.width
        const height = canvas.height
        const imageData = this.frameData[this.frame]
        ctx.putImageData(imageData, 0, 0, 0, 0, width, height)
    }
    
    private initializePoints(canvas: HTMLCanvasElement) {
        const width = canvas.width
        const height = canvas.height

        const gridSize = Math.max(width, height) / this.gridCount

        for (let y = 0; y < height; y += gridSize) {
            const bucket = []
            for (let x = 0; x < width; x += gridSize) {
                const initialX = x + gridSize * Math.random()
                const initialY = y + gridSize * Math.random()
                bucket.push({
                    initialX,
                    initialY,
                    curX: initialX,
                    curY: initialY,
                    xLower: x,
                    yLower: y,
                    seed: Math.random()
                });
            }
            this.points.push(bucket)
        }
    }

    private updatePoints(canvas: HTMLCanvasElement) {
        const width = canvas.width
        const height = canvas.height
        const gridSize = Math.max(width, height) / this.gridCount
    
        for (let i = 0; i < Math.floor(height/gridSize); i += 1) {
            const bucket = this.points[i]
            for (let j = 0; j < Math.floor(width/gridSize); j += 1) {
                const point = bucket[j]
    
                const curProgress = this.frame / Worley.frameLen
                point.curX = point.initialX + Math.sin(curProgress * 2 * Math.PI) * this.movementParam * point.seed;
                point.curY = point.initialY + Math.sin(curProgress * 2 * Math.PI) * this.movementParam * point.seed;
                
                point.curX = Math.max(point.xLower, point.curX)
                point.curX = Math.min(point.xLower + gridSize, point.curX)
                point.curY = Math.max(point.yLower, point.curY)
                point.curY = Math.min(point.yLower + gridSize, point.curY)
            }
        }
    }

    private updateFrameData(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        if (this.frameData[this.frame]) return
        const width = canvas.width
        const height = canvas.height
    
        const imageData = ctx.createImageData(width, height)
    
        for (let i = 0; i < imageData.data.length; i += 4) {
            const idx = Math.floor(i/4)
            const x = idx % width
            const y = Math.floor(idx / width)
            const noise = this.getWorleyNoise(x, y, canvas);
            const [r, g, b] = calcRGB(noise, this.color, this.limit)
            imageData.data[i] = r
            imageData.data[i+1] = g
            imageData.data[i+2] = b
            imageData.data[i+3] = 255
        }
    
        this.frameData[this.frame] = imageData
        return
    }
    
    private getWorleyNoise(x: number, y: number, canvas: HTMLCanvasElement) {
        const width = canvas.width
        const height = canvas.height
        const gridSize = Math.max(width, height) / this.gridCount
    
        let minDist = gridSize ** 2;
    
        const curGridRow = Math.floor(y/gridSize)
        const curGridCol = Math.floor(x/gridSize)
    
        for (const row of [curGridRow -1, curGridRow, curGridRow + 1]) {
            if (row < 0) continue
            if (this.points.length <= row) continue 
            const bucket = this.points[row]
            for (const col of [curGridCol - 1, curGridCol, curGridCol + 1]) {
                if (col< 0) continue
                if (bucket.length <= col) continue 
                const dx = bucket[col].curX - x;
                const dy = bucket[col].curY - y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                minDist = Math.min(minDist, dist);
            }
        }
    
        return (minDist / gridSize) * this.limit
    }
}
staticImplements<IDynamicObjectConstructor<DBWorley, Worley>>(Worley)

const MIN = 10e-5

const calcRGB = (noise: number, color: RgbaObject, limit: number) => {
    const colors = [color.red, color.green, color.blue]
    return colors.map((c) => getScaledColor(noise, limit, c))
}

const getScaledColor = (noise: number, limit: number, color: number) => {
    const scaleFactor = getScaleFactor(color, limit)
    return (noise/scaleFactor) ** 2 + color
}

const getScaleFactor = (v: number, limit: number) => {
    return limit / Math.max(MIN, Math.sqrt(limit - v))
}
