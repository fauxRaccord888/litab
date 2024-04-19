import type { IDynamicObject, IDynamicObjectSeed } from "../types";
import { ShootingStar, Star } from "../../Backgrounds/animation";
import { Spiral, Shadow } from "$feature/PentagramDecoration/Boids";

export function hydrateSeed(
    seeds: IDynamicObjectSeed[],
    sides: number,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
): IDynamicObject[] {
    // COMMENT 
    // BOID의 행위를 시뮬레이팅 하기 위해, 즉 회피 및 군집 행위를 위해 배열을 참조해야 함
    // Boid class의 인스턴스들은 전체 배열을 참조해야 하고, 전체 배열은 인스턴스를 참고함 
    // 이는 실질적으로 메모리 해제가 이루어지지 않는 로직이므로 위험함

    const shadows: Shadow[] = []

    return seeds.reduce((acc: IDynamicObject[], seed: IDynamicObjectSeed) => {
        if (seed.__typename === "Stars") {
            const stars = Array
                .from({length: seed.count})
                .map(() => new Star(seed, canvas, ctx))
            const shootingStars = Array
                .from({length: seed.shootingStarCount})
                .map(() => new ShootingStar(canvas, ctx))
            return [...acc, ...stars, ...shootingStars]
        }

        if (seed.__typename === "Shadows") {
            const shadow = new Shadow(seed, shadows, sides, canvas, ctx)
            shadows.push(shadow)
            return [...acc, shadow]
        }

        if (seed.__typename === "Spirals") {
            const spiral = new Spiral(seed, sides, canvas, ctx)
            return [...acc, spiral]
        }

        return acc
    }, [])
}