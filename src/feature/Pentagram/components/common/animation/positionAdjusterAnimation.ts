import type { PentagramNodePosition } from "../../../types"
import type { useCSSVariables } from "$lib/hooks/useCSSVariables"
import { calcTransformValueFromPosition } from "../../../utils"

// COMMENT
// from 부분은 신규 생성 노드의 애니메이션을 위해 필요

export function calcPositionAdjusterAnimation(payload: {
    position: PentagramNodePosition,
    prevPosition?: PentagramNodePosition | undefined,
    inView: boolean,
    enableAnimation?: boolean,
    shadowDeleted?: boolean | null | undefined
    STYLE: ReturnType<typeof useCSSVariables>
}) {
    const { position, prevPosition, inView, enableAnimation, shadowDeleted, STYLE } = payload
    const { transformX, transformY } = calcTransformValueFromPosition(position, STYLE)
    const { transformX: prevX, transformY: prevY } = calcTransformValueFromPosition(prevPosition, STYLE)
    const isValidCurPosition = typeof transformX === 'number' && typeof transformY === 'number'
    const isValidPrevPosition = typeof prevX === 'number' && typeof prevY === 'number'

    const prevTranslate = `${prevX}px, ${prevY}px`
    const curTranslate = `${transformX}px, ${transformY}px` 

    const fromScale = isValidPrevPosition && !prevPosition?.deleted ? 1 : 0
    const fromTranslate = (enableAnimation && isValidPrevPosition) ? prevTranslate : curTranslate

    const toScale = shadowDeleted ? 1
        : !inView ? fromScale
        : isValidCurPosition && !position.deleted ?  1 
        : 0
    const toTranslate = (enableAnimation && isValidPrevPosition && !inView) ? prevTranslate : curTranslate

    return {
        from: { 
            transform: `translate(${fromTranslate}) scale(${fromScale})`
        },
        transform: `translate(${toTranslate}) scale(${toScale})`,
        config: { 
            mass: 3,
            friction: 40,
            tension: 280,
        }
    }
}