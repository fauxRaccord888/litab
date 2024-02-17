import type { AppRootState } from "$lib/stores/store"
import { useDispatch, useSelector } from "react-redux"
import { useThrottle } from "$lib/hooks"

import { setSelectedPosition, updatePosition } from "$feature/Pentagram/store/pentagramUpsertSlice"

import { getAngleAndDisctance } from "../../utils"
import { PENTAGRAM } from "../../constants"
import { Quadtree, quadtreeRoot } from "../../utils/quadtree"

export function useHandleDrag(parentElem: HTMLDivElement | null) {
    const { selected } = useSelector((state: AppRootState) => state.pentagramUpsert)
    const dispatch = useDispatch()
    const throttle = useThrottle()

    const handleDrag = (e: {clientX: number, clientY: number}) => {
        if (!parentElem) return

        const { angle, distance } = getAngleAndDisctance(e, parentElem, PENTAGRAM.SIDES)
        if (typeof angle !== 'number' || typeof distance !== 'number') return

        const colliding = Quadtree.checkCollidingByPosition(quadtreeRoot, {
            angle, 
            distance, 
        })
        
        if (colliding) return

        if (selected.nodeType === 'node') {
            throttle(
                () => dispatch(updatePosition({ angle, distance}))
            , 25)
        }

        if (selected.nodeType === 'idle') {
            throttle(
                () => dispatch(setSelectedPosition({ angle, distance }))
            , 25)
        }
    }

    return { handleDrag }
}    
