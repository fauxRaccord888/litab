
import type { AppRootState } from "$lib/stores/store"
import { useCallback, type MutableRefObject } from "react"
import type { QuadtreeNode } from "../../utils"
import { useSelector } from "react-redux"
import { Quadtree } from "../../utils"

export function useInsertSelectedInQuadtree(quadtreeRef: MutableRefObject<QuadtreeNode | null>) {
    const { entities: mergedNode } = useSelector((state: AppRootState) => state.pentagramUpsert.mergedNode)
    const selectedId = useSelector((state: AppRootState) => state.pentagramUpsert.selected)

    const insertSelected = useCallback(() => {
        if (selectedId && quadtreeRef.current && mergedNode[selectedId]) {
            Quadtree.insertNodeByPosition(quadtreeRef.current, mergedNode[selectedId])
        }
    }, [selectedId, quadtreeRef, mergedNode])

    return insertSelected
}