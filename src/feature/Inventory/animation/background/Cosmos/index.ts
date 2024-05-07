import type { IDynamicObject, IDynamicObjectConstructor, DBDecoration } from "../../../types";
import { Star } from "./Star";
import { ShootingStar } from "./ShootingStar";
import { boxMullerRandom, createRandomizedObject, randomColorVal, staticImplements } from "$lib/utils";
import { COSMOS } from "../../../constants";
import { DecorationType } from "$lib/graphql/__generated__/graphql";
import rgbHex from "rgb-hex"
import Alea from "alea";

export class Cosmos implements IDynamicObject {
    static __typename = DecorationType.Cosmos
    static isBackground = true
    stars: Star[]
    shootingStars: ShootingStar[]

    // WARNING CAVEAT 순서 변경 주의(시드에서 추출된 난수에 의해 아이템의 옵션이 설정됨)
    static createObjectFromSeed(decoration: DBDecoration) {
        const prng = Alea(decoration.seed)

        const randomColor = () => rgbHex(
            randomColorVal(0, 255, 0.5, prng),
            randomColorVal(0, 255, 0.5, prng),
            randomColorVal(0, 255, 0.5, prng)
        )

        const obj = createRandomizedObject(COSMOS, prng)
        const colorLength = Math.floor(boxMullerRandom({min: 1, max: 3.2, skew: 1, isInt: true, prng}))
        const shootingStarColors = Array.from({length: colorLength}).map(() => randomColor())

        const result = Object.assign({
            shootingStarColors
        }, obj)
    
        return result
    }

    constructor(
        decoration: DBDecoration,
        canvas: HTMLCanvasElement, 
    ) {
        const result = Cosmos.createObjectFromSeed(decoration)

        this.stars = Array
            .from({length: result.starCount})
            .map(() => new Star(result, canvas))
        this.shootingStars = Array
            .from({length: result.shootingStarCount})
            .map(() => new ShootingStar(result, canvas))
    }

    update(canvas: HTMLCanvasElement) {
        this.stars.forEach((s) => s.update(canvas))
        this.shootingStars.forEach((ss) => ss.update(canvas))
    }

    draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.stars.forEach((s) => s.draw(canvas, ctx))
        this.shootingStars.forEach((ss) => ss.draw(canvas, ctx))
    }
}
staticImplements<IDynamicObjectConstructor<Cosmos>>(Cosmos)