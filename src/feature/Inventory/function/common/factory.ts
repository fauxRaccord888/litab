import type { DBDecoration } from "../../types";
import type { IDynamicObject } from "$feature/Inventory/types";
import { Cosmos, Ocean, Shadow } from "../../animation";
import { COSMOS, OCEAN, SHADOW } from "../../constants"
import { DecorationType } from "$lib/graphql/__generated__/graphql";

type AnimationInstance = Cosmos | Shadow | Ocean

export class SeedFactory {
    // TODO 이후 인벤토리 아이템 추가 시, "직접" 추가해줘야 함
    static cstr = {
        ocean: Ocean,
        cosmos: Cosmos, 
        shadow: Shadow
    }

    static constants = {
        ocean: OCEAN,
        cosmos: COSMOS, 
        shadow: SHADOW
    }

    static createSeed() {
        return Math.floor(Math.random() * 0xffffffffffff).toString(16).padEnd(12, "0")
    }

    static createAnimationInstance(
        decoration: DBDecoration,
        canvas: HTMLCanvasElement, 
        group: IDynamicObject[],
        sides: number,
    ): AnimationInstance | null{
        const cstr = SeedFactory.cstr[decoration.type]
        if (!cstr) return null
        return new cstr(decoration, canvas, group, sides)
    }

    static getHydratedSeed(
        decoration: DBDecoration,
    ) {
        const cstr = SeedFactory.cstr[decoration.type]
        return cstr.createObjectFromSeed(decoration)
    }

    static isBackground(
        category: DecorationType,
    ) {
        const cstr = SeedFactory.cstr[category]
        return cstr.isBackground
    }

    static getConstant(
        decoration: DBDecoration,
    ) {
        const category = decoration.type
        const constant = SeedFactory.constants[category]
        return constant
    }
}