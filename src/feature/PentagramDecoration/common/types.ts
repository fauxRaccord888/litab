import type { DBBoids } from "../Boids/types"

export interface IDynamicObject {
    draw: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void,
    update: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void
}

export type IDynamicObjectSeed = StarSeed | SpiralSeed | DBBoids

// TODO graphql 추가하기 전에 사용하는 임시 타입
type StarSeed = {
    __typename: "Stars",
    sizeParam: number,
    speedParam: number,
    count: number,
    shootingStarCount: number
}

type SpiralSeed = {
    __typename: "Spirals",
    color: number[],
    size: number,
    speedLimit: number,
    petal: number,
}