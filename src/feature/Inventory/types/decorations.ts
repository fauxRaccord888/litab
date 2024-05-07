import type { DBDecoration } from "../types"
import type { DecorationType } from "$lib/graphql/__generated__/graphql"
import { Cosmos, Ocean, Shadow } from "../animation"

// TODO 직접 수정
type Animation = Cosmos | Ocean | Shadow

// 데코레이터용 스태틱 메서드 정의 타입
export interface IDynamicObjectConstructor<TAnimation extends Animation, TObject = unknown> {
    new(
        seed: DBDecoration,
        canvas: HTMLCanvasElement, 
        group: IDynamicObject[], 
        sides: number,
    ): TAnimation,
    
    __typename: DecorationType
    // 애니메이션 인스턴스의 특정 프로퍼티(속도, 수량, 색상 등)를 인벤토리에서 확인할 필요가 있음
    // 실질적으로 해당 프로퍼티는 대부분 public할 필요 없음 - 정보 조회 시에 '값'만 볼 수 있도록 캡슐화
    createObjectFromSeed: (decoration: DBDecoration) => TObject
    isBackground: boolean
}

export interface IDynamicObject {
    completed?: boolean
    draw: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void,
    update: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void,
}