import type { QuadtreeNode } from "../../utils"
import { useDispatch } from "react-redux"
import { useThrottle } from "$lib/hooks"
import { setPosition } from "$feature/Pentagram/store/pentagramUpsertSlice"
import { Quadtree, getAngleAndDisctance } from "../../utils"
import { PENTAGRAM } from "../../constants"

export function useHandleDrag(parentRef: HTMLDivElement | null, quadtreeRef: QuadtreeNode | null) {
    const dispatch = useDispatch()
    const throttle = useThrottle()

    const handleDrag = (e: {clientX: number, clientY: number}) => {
        if (!parentRef) return
        const { angle, distance } = getAngleAndDisctance(e, parentRef, PENTAGRAM.SIDES)
        if (typeof angle !== 'number' || typeof distance !== 'number') return

        if (!quadtreeRef) return
        const colliding = Quadtree.checkCollidingByPosition(quadtreeRef, { angle, distance })
        if (colliding) return

        throttle(
            () => dispatch(setPosition({ angle, distance }))
        , 25)
    }

    return { handleDrag }
}    
