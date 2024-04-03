import type { PentagramNodePosition } from "../../types"
import { useCSSVariables } from "$lib/hooks/useCSSVariables"
import { PENTAGRAM } from "../../constants"

export function calcTransformValueFromPosition(
    position: PentagramNodePosition | undefined, 
    STYLE: ReturnType<typeof useCSSVariables>
) {
    if (
        !position || 
        typeof position.angle !== 'number' || 
        typeof position.distance !== 'number'
    ) {
        return { transformX: null, transformY: null }
    }
    
    const { angle, distance } = position
    const radius = distance / 100 * STYLE.NODE * 3
    const degreeWithOffset = (angle+STYLE.PENTAGON_ANGLE_OFFSET) * Math.PI / PENTAGRAM.HALF_CIRCLE

    const transformX = Math.cos(degreeWithOffset) * radius - STYLE.NODE * 0.5
    const transformY = Math.sin(degreeWithOffset) * radius - STYLE.NODE * 0.5

    return { transformX, transformY }
}