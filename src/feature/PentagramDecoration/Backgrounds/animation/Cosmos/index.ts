import type { InventoryEntities } from "$feature/Inventory/types";
import type { DBCosmos } from "../../types";
import type { IDynamicObject } from "$feature/PentagramDecoration/types";
import type { IDynamicObjectConstructor } from './../../../types';
import { Star } from "./Star";
import { ShootingStar } from "./ShootingStar";
import { createRandomizedObject, randomColorVal, staticImplements } from "$lib/utils";
import { COSMOS } from "../../constants";
import { t } from "i18next";
import { CustomTypeError } from "$lib/error/customError/TypeError";
import rgbHex from "rgb-hex"

export class Cosmos implements IDynamicObject {
    static __typename = "Cosmos" as const

    stars: Star[]
    shootingStars: ShootingStar[]

    static createSeed() {
        const colorLength = Math.floor(Math.random() * 2.3) + 1
        const randomColor = () => rgbHex(
            randomColorVal(0, 255, 1), 
            randomColorVal(0, 255, 1), 
            randomColorVal(0, 255, 1)
        )

        const obj = createRandomizedObject(COSMOS)
        const result = Object.assign({
            name: t('pentagramDecoration.cosmos.value.newRecord'),
            shootingStarColors: Array.from({length: colorLength}).map(() => randomColor())
        }, obj)
    
        return result
    }

    constructor(
        seed: InventoryEntities,
        canvas: HTMLCanvasElement, 
    ) {
        if (seed.__typename !== Cosmos.__typename) {
            throw new CustomTypeError()
        }
        this.stars = Array
            .from({length: seed.starCount})
            .map(() => new Star(seed, canvas))
        this.shootingStars = Array
            .from({length: seed.shootingStarCount})
            .map(() => new ShootingStar(seed, canvas))
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
staticImplements<IDynamicObjectConstructor<DBCosmos, Cosmos>>(Cosmos)