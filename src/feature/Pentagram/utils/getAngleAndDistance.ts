import type { MouseEvent } from "react"
import { PENTAGRAM } from "../constants"

export function getAngleAndDisctance(e: MouseEvent, rect: DOMRect, sides: number) {
    const x = e.clientX - rect.left 
    const y = e.clientY - rect.top
    const radius = rect.height // DEBUG 반응형으로 radius가 바뀌기 때문에 불가피하게 넣은 흑마술임 다른 방법을 고안할 필요가 있음
    if (!isInside(y, x, radius, sides)) return { error: true }

    const angle = calcAngle(y, x)
    const distance = calcDistance(y, x, radius)

    return { angle, distance }
    
}

function isInside(y: number, x: number, radius: number, sides: number) {
    let inside = false
    const radianPerSide = 2 * Math.PI / sides
    const calibrate = PENTAGRAM.ANGLE_CALIBRATE / 180 * Math.PI
    
    for (let i = 0; i < sides - 1; i++) {
        const x1 = Math.cos(radianPerSide * i + calibrate) * radius
        const y1 = Math.sin(radianPerSide * i + calibrate) * radius
        const x2 = Math.cos(radianPerSide * (i+1) + calibrate) * radius
        const y2 = Math.sin(radianPerSide * (i+1) + calibrate) * radius

        const intersect = ((y2 > y) != (y1 > y)) &&
            (x < (x2 - x1) * (y - y1) / (y2 - y1) + x1 + PENTAGRAM.EPSILON) 
        // 꼭짓점 예외 판정은 불필요함(원본 노드임 + 정n각형이므로 판정 시, 같은 높이에 대칭 꼭짓점)
        // 추후 복잡한 도형으로 대체해야만 하는 경우 Convex Hulls 알고리즘으로 대체
        if (intersect) inside = !inside;
    }

    return inside
}

function calcAngle(y: number, x: number) {
    const radian = Math.atan2(y, x)
    const angle = ((radian + Math.PI) / Math.PI * PENTAGRAM.HALF_CIRCLE + PENTAGRAM.ANGLE_CALIBRATE) % PENTAGRAM.FULL_CIRCLE
    return angle
}

function calcDistance(y: number, x: number, radius: number) {
    return ((y ** 2 + x ** 2) ** 0.5) / radius * 100
}