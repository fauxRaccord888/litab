import type { AppRootState } from "$lib/stores/store"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { Quadtree } from "../../utils"

export function useCheckCollding() {
    const { tree } = useSelector((state: AppRootState) => state.quadtree)

    const checkColliding = useCallback((angle: number, distance:number) => {
        return Quadtree.checkCollidingByPosition(tree, { angle, distance })
    }, [tree])

    return checkColliding
}

