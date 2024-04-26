import type { DBDecoration } from "$feature/Inventory/types"
import type { DecorationType } from "$lib/graphql/__generated__/graphql"
import { Cosmos, Ocean } from "./Backgrounds"
import { Shadow } from "./Boids"

// 데코레이터용 스태틱 메서드 정의 타입
export interface IDynamicObjectConstructor<TAnimation, TObject = unknown> {
    new(
        seed: DBDecoration,
        canvas: HTMLCanvasElement, 
        group: IDynamicObject[], 
        sides: number,
    ): TAnimation,
    
    createObjectFromSeed: (decoration: DBDecoration) => TObject
    __typename: DecorationType
    isBackground: boolean
}

export interface IDynamicObject {
    completed?: boolean
    draw: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void,
    update: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void,
}

export type DecorationAnimationEntity = Cosmos | Ocean | Shadow