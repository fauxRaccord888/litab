import { PENTAGRAM } from "../constants"

export function getAngleAndDisctance(
    event: {clientX: number, clientY: number}, 
    parentElem: HTMLDivElement, 
    sides: number
) {
    const rect = parentElem.getBoundingClientRect()
    const x = event.clientX - rect.left 
    const y = event.clientY - rect.top

    const radius = rect.height // DEBUG 반응형으로 radius가 바뀌기 때문에 불가피하게 넣은 흑마술임 다른 방법을 고안할 필요가 있음

    if (!isInside(y, x, radius, sides)) return { angle: null, distance: null }

    const angle = Math.round(calcAngle(y, x))
    const distance = Math.round(calcDistance(y, x, radius))

    return positionWithAdjustment({ angle, distance })
}

function isInside(y: number, x: number, radius: number, sides: number) {
    let inside = false
    const radianPerSide = 2 * Math.PI / sides
    const offset = PENTAGRAM.ANGLE_OFFSET / PENTAGRAM.HALF_CIRCLE * Math.PI
    
    for (let i = 0; i < sides; i++) {
        const x1 = Math.cos(radianPerSide * i + offset) * radius
        const y1 = Math.sin(radianPerSide * i + offset) * radius
        const x2 = Math.cos(radianPerSide * (i+1) + offset) * radius
        const y2 = Math.sin(radianPerSide * (i+1) + offset) * radius

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
    const angle = ((radian + Math.PI) / Math.PI * PENTAGRAM.HALF_CIRCLE + PENTAGRAM.ANGLE_OFFSET) % PENTAGRAM.FULL_CIRCLE
    return angle
}

function calcDistance(y: number, x: number, radius: number) {
    return ((y ** 2 + x ** 2) ** 0.5) / radius * 100
}

function positionWithAdjustment(position: {angle: number, distance: number}) {
    const { angle, distance } = position
    const { SIDES, FULL_CIRCLE, FULL_DISTANCE, VERTEX_DISTANCE_THRESHOLD, VERTEX_ANGLE_THRESHOLD } = PENTAGRAM
    
    for (let i = 0; i < SIDES; i++ ){
        const targetAngle = FULL_CIRCLE / SIDES * i
        if (
            Math.abs(FULL_DISTANCE - distance) < VERTEX_DISTANCE_THRESHOLD &&
            (Math.abs(FULL_CIRCLE - targetAngle + angle) % FULL_CIRCLE < VERTEX_ANGLE_THRESHOLD || 
            Math.abs(FULL_CIRCLE + targetAngle - angle) % FULL_CIRCLE < VERTEX_ANGLE_THRESHOLD)
        ) {
            return { angle: targetAngle, distance: FULL_DISTANCE }
        }
    }
    return { angle, distance }
}