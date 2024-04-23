import type { InventoryEntities } from "$feature/Inventory/types"

// 데코레이터용 스태틱 메서드 정의 타입
export interface IDynamicObjectConstructor<TSeed extends InventoryEntities, TAnimation=unknown> {
    new(
        seed: TSeed,
        canvas: HTMLCanvasElement, 
        group: IDynamicObject[], 
        sides: number,
    ): TAnimation
    __typename: TSeed["__typename"]
    createSeed(): Omit<TSeed, SeedOmitKey>
}

export interface IDynamicObject {
    completed?: boolean
    draw: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void,
    update: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void,
}

// Seed(DB에 Mutation값)가 잘 정의되었는지 확인하기 위한 키
export type SeedOmitKey = "__typename" | "id" | "userId" | "pentagramId"
// 상수에서 모든 필요 값을 정의했는지 확인하기 위한 키
export type ConstantOmitKey = SeedOmitKey | "name"