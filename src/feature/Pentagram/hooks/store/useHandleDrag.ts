import type { AppRootState } from "$lib/stores/store"
import { useDispatch, useSelector } from "react-redux"
import { useThrottle } from "$lib/hooks"

import { setSelectedPosition, updatePosition } from "$feature/Pentagram/store/updateNodeSlice"

import { getAngleAndDisctance } from "../../utils"
import { PENTAGRAM } from "../../constants"

export function useHandleDrag(parentElem: HTMLDivElement | null) {
    const { selected } = useSelector((state: AppRootState) => state.updateNode)
    const dispatch = useDispatch()
    const throttle = useThrottle()

    const handleDrag = (e: {clientX: number, clientY: number}) => {
        if (!parentElem) return

        const { angle, distance } = getAngleAndDisctance(e, parentElem, PENTAGRAM.SIDES)
        if (typeof angle !== 'number' || typeof distance !== 'number') return

        if (selected.nodeType === 'sub-node') {
            throttle(
                () => dispatch(updatePosition({ angle, distance}))
            , 100)
        }

        if (selected.nodeType === 'idle') {
            throttle(
                () => dispatch(setSelectedPosition({ angle, distance }))
            , 100)
        }
    }

    return { handleDrag }
}    
