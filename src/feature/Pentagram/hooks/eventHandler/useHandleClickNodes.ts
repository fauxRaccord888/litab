import type { MouseEventHandler } from "react"
import type { QuadtreeNode } from "../../utils"
import { useDispatch } from "react-redux"
import { setSelected, setSelectedPosition } from "../../store/pentagramUpsertSlice"
import { getAngleAndDisctance } from "../../utils"
import { Quadtree } from "../../utils"
import { PENTAGRAM } from "../../constants"

export function useHandleClickNodes(quadtreeRef: QuadtreeNode | null) {
    const dispatch = useDispatch()

    const handleClickNode = (id: string) => {
        dispatch(setSelected({ id }))
    }

    const handleClickParent: MouseEventHandler<HTMLDivElement> = (e) => {
        if (!quadtreeRef) return

        const { angle, distance } = getAngleAndDisctance(e, e.currentTarget, PENTAGRAM.SIDES)
        if (typeof angle !== 'number' || typeof distance !== 'number') return

        const colliding = Quadtree.checkCollidingByPosition(quadtreeRef, { angle, distance })
        if (colliding) return
        
        dispatch(setSelectedPosition({angle, distance}))
    }

    return { handleClickNode, handleClickParent }
}    
