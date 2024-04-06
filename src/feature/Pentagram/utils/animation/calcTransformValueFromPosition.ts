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
    const radius = distance / 100 * Number(STYLE.node) * 3
    const degreeWithOffset = (angle+Number(STYLE.pentagonAngleOffset)) * Math.PI / Number(PENTAGRAM.HALF_CIRCLE)

    const transformX = Math.cos(degreeWithOffset) * radius - Number(STYLE.node) * 0.5
    const transformY = Math.sin(degreeWithOffset) * radius - Number(STYLE.node) * 0.5

    return { transformX, transformY }
}