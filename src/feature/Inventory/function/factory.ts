import type { DBDecoration } from "../types";
import type { IDynamicObject } from "$feature/PentagramDecoration";
import { Cosmos, Ocean, Shadow } from "$feature/PentagramDecoration";
import { DecorationType } from "$lib/graphql/__generated__/graphql";

type AnimationInstance = Cosmos | Shadow | Ocean

export class SeedFactory {
    // TODO 이후 인벤토리 아이템 추가 시, "직접" 추가해줘야 함
    static cstr = {
        ocean: Ocean,
        cosmos: Cosmos, 
        shadow: Shadow
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
        try {
            const cstr = SeedFactory.cstr[decoration.type]
            if (!cstr) return null
            return new cstr(decoration, canvas, group, sides)
        } catch(e) {
            return null
        }
    }

    static getHydratedSeed(
        decoration: DBDecoration,
    ) {
        try {
            const cstr = SeedFactory.cstr[decoration.type]
            if (!cstr) return null
            return cstr.createObjectFromSeed(decoration)
        } catch(e) {
            return null
        }
    }

    static isBackground(
        category: DecorationType,
    ) {
        try {
            const cstr = SeedFactory.cstr[category]
            if (!cstr) return null
            return cstr.isBackground
        } catch(e) {
            return null
        }
    }
}