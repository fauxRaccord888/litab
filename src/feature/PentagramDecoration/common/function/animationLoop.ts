// TODO 
// ref오브젝트로 사용하기 때문에 class 구현체를 써도 상관이 없음
// 트리 셰이킹이 안 되는 부분 및 메모리 누수 관련 부분에서 class 활용 검토 필요

import type { IDynamicObject } from "../types"

export function animationLoop(
    dynamics: IDynamicObject[] | null,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!dynamics) return
    dynamics.forEach((d) => {
        d.update(canvas, ctx)
        d.draw(canvas, ctx)
    })
}