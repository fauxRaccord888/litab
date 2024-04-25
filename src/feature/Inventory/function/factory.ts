import type { InventoryEntities, InventoryKey } from "../types";
import type { IDynamicObject } from "$feature/PentagramDecoration";
import { Cosmos, Ocean, Shadow } from "$feature/PentagramDecoration";

type AnimationInstance = Cosmos | Shadow | Ocean

export class SeedFactory {
    // TODO 이후 인벤토리 아이템 추가 시, "직접" 추가해줘야 함
    static cstr = {
        Ocean,
        Cosmos, 
        Shadows: Shadow
    }

    static createSeed(category: InventoryKey) {
        const cstr = SeedFactory.cstr[category]
        if (!cstr) return null
        return cstr.createSeed()
    }

    static createAnimationInstance(
        seed: InventoryEntities,
        canvas: HTMLCanvasElement, 
        group: IDynamicObject[],
        sides: number,
    ): AnimationInstance | null{
        try {
            const cstr = SeedFactory.cstr[seed.__typename]
            if (!cstr) return null
            return new cstr(seed, canvas, group, sides)
        } catch(e) {
            return null
        }
    }
}