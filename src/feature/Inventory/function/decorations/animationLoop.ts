// TODO 
// ref오브젝트로 사용하기 때문에 class 구현체를 써도 상관이 없음
// 50ms마다 실행하는 코드이기 때문에 적절한 메모리 관리가 필요함

import type { IDynamicObject } from "../../types"

export function animationLoop(args: {
    dynamics: (IDynamicObject | null)[] | null,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    onComplete?: (() => void) | null,
}) {
    const { dynamics, ctx, canvas, onComplete } = args
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!dynamics) return
    
    for (let i = 0; i < dynamics.length; i++) {
        const d = dynamics[i]
        if (!d) continue
        d.update(canvas, ctx)
        d.draw(canvas, ctx)
        if (d.completed) {
            dynamics[i] = null
        }
    }

    if (dynamics.every((d) => d === null)) {
        if (onComplete) onComplete()
    }
}