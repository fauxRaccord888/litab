import type { PentagramNodePosition } from "../../../types"
import { calcTransformValueFromPosition } from "../../../utils"
import { useCSSVariables } from "$lib/hooks/useCSSVariables"

export function calcPositionAdjusterAnimation(payload: {
    position: PentagramNodePosition,
    prevPosition?: PentagramNodePosition | undefined,
    enableAnimation?: boolean,
    STYLE: ReturnType<typeof useCSSVariables>
}) {
    const { position, prevPosition, enableAnimation, STYLE } = payload
    const { transformX, transformY } = calcTransformValueFromPosition(position, STYLE)
    const { transformX: prevX, transformY: prevY } = calcTransformValueFromPosition(prevPosition, STYLE)
    const isValidCurPosition = typeof transformX === 'number' && typeof transformY === 'number'
    const isValidPrevPosition = typeof prevX === 'number' && typeof prevY === 'number'

    return {
        from: { 
            opacity: (!isValidPrevPosition || prevPosition?.deleted) ?  0 : 1,
            transform: (enableAnimation && isValidPrevPosition) 
                ? `translate(${prevX}px, ${prevY}px)` 
                : `translate(${transformX}px, ${transformY}px)` 
        },
        opacity: (!isValidCurPosition || position.deleted) ?  0 : 1,
        transform: `translate(${transformX}px, ${transformY}px)` 
    }
    
}