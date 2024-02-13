import type { AppRootState } from "$lib/stores/store"
import { useDispatch, useSelector } from "react-redux"

import { setSelectedPosition, updatePosition } from "$feature/Pentagram/store/updateNodeSlice"

import { getAngleAndDisctance } from "../../utils"
import { PENTAGRAM } from "../../constants"

export function useHandleDrag(parentElem: HTMLDivElement | null) {
    const { selected } = useSelector((state: AppRootState) => state.updateNode)
    const dispatch = useDispatch()

    // TODO 쓰로틀 / 디바운스
    const handleDrag = (e: {clientX: number, clientY: number}) => {
        if (!parentElem) return

        const { angle, distance } = getAngleAndDisctance(e, parentElem, PENTAGRAM.SIDES)
        if (typeof angle !== 'number' || typeof distance !== 'number') return

        if (selected.nodeType === 'sub-node') {
            dispatch(updatePosition({ angle, distance}))
        }
        if (selected.nodeType === 'idle') {
            dispatch(setSelectedPosition({angle, distance}))
        }
    }

    return {handleDrag }
}    
