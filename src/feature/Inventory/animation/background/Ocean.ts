import type { IDynamicObject, IDynamicObjectConstructor, DBDecoration } from "../../types";
import type { RgbaObject } from "hex-rgb"
import type { NoiseFunction2D } from "simplex-noise";
import { createNoise2D } from "simplex-noise";
import { createRandomizedObject, randomColorVal, staticImplements } from "$lib/utils";
import { OCEAN } from "../../constants";
import { DecorationType } from "$lib/graphql/__generated__/graphql";
import Alea from "alea"
import hexRgb from "hex-rgb";
import rgbHex from "rgb-hex";
import * as GLSL from "$lib/animation/GLSL";

export class Ocean implements IDynamicObject {
    static __typename = DecorationType.Ocean
    static isBackground = true
    static height = 0.15;
    static tide = 0.08;
    static frameLen = 80
    static octave = 1
    static st = 0.5

    private noise: NoiseFunction2D
    private foamThickness: number
    private mulScale: number
    private foamColor: RgbaObject
    private waterColor: RgbaObject
    
    private frame: number
    private frameData: ImageData[]
    
    // WARNING CAVEAT 순서 변경 주의(시드에서 추출된 난수에 의해 아이템의 옵션이 설정됨)
    static createObjectFromSeed(decoration: DBDecoration) {
        const prng = Alea(decoration.seed)

        const obj = createRandomizedObject(OCEAN, prng)
        const waterColor = rgbHex(randomColorVal(4, 32, 3, prng), randomColorVal(20, 148, 2, prng), randomColorVal(50, 184, 0.5, prng))
        const foamColor = rgbHex(randomColorVal(188, 212, 1, prng), randomColorVal(212, 221, 1, prng), randomColorVal(225, 232, 1, prng))
        const noise = createNoise2D(prng)

        const result = Object.assign({
            waterColor,
            foamColor,
            noise
        }, obj)
    
        return result
    }

    constructor(
        decoration: DBDecoration
    ) {
        const result = Ocean.createObjectFromSeed(decoration)
        this.frame = 0
        this.frameData = []

        this.noise = result.noise
        this.foamThickness = result.foamThickness
        this.mulScale = result.mulScale
        this.foamColor = hexRgb(result.foamColor)
        this.waterColor = hexRgb(result.waterColor)
    }
    
    update(canvas:HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.frame = (this.frame + 1) % Ocean.frameLen
        if (!this.frameData[this.frame]) {
            this.updateFrameData(canvas, ctx)
        } 
    }
    
    draw(_c:HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        if (!this.frameData[this.frame]) return
        const imageData = this.frameData[this.frame]
        ctx.putImageData(imageData, 0, 0)
    }

    private updateFrameData(canvas:HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        const timeParam = this.frame / Ocean.frameLen * Math.PI * 2
        const imageData = ctx.createImageData(canvas.width, canvas.height)
        const data = imageData.data

        const cosT = Math.cos(timeParam)
        const sinT = Math.sin(timeParam)

        for (let i = 0; i < data.length; i+= 4) {
            const x = i/4 % canvas.width
            const y = Math.floor(i/4 / canvas.width)
            const vec = [3*x/canvas.width, 3*y/canvas.height] as GLSL.Vec2GLSL
            const isFoam = this.isFoam(vec, cosT, sinT)

            if (isFoam) {
                this.fillColor(data, this.foamColor, i)
            } else {
                this.fillColor(data, this.waterColor, i)
            }
        }

        this.frameData[this.frame] = imageData
    }

    private fillColor(data: Uint8ClampedArray, c: RgbaObject, i: number) {
        const color = [c.red, c.green, c.blue, c.alpha]

        data[i] = color[0]
        data[i+1] = color[1]
        data[i+2] = color[2]
        data[i+3] = color[3] * 255
    }

    private isFoam(v: GLSL.Vec2GLSL, cosT: number, sinT: number) {
        const fbmval = GLSL.fbm(
            GLSL.vec2(
                v[0] * this.mulScale + 0.1 * sinT + 0.1 * cosT,
                v[1] * this.mulScale + 0.1 * cosT + 0.1 * sinT,
            ),
            this.noise,
            Ocean.octave,
            Ocean.st
        );

        const processedHeight = Ocean.height + Ocean.tide * sinT * 0.25;
        return Boolean(
            GLSL.step(processedHeight, fbmval) * 
            GLSL.step(fbmval, processedHeight + this.foamThickness)
        )
    }
}
staticImplements<IDynamicObjectConstructor<Ocean>>(Ocean)





