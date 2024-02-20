import type { AppRootState } from "$lib/stores/store"
import type { QuadtreeNode } from "../../utils"
import { useRef, useEffect } from "react"
import { useSelector } from "react-redux"
import { Quadtree } from "../../utils"
import { mergedNodeSelector } from "../../store/pentagramUpsertSlice"

export function useQuadtreeRef() {
    const selectedId = useSelector((state: AppRootState) => state.pentagramUpsert.selected)
    const previousSelectedIdRef = useRef<string | null>(null)
    const unfilteredNodes = useSelector((state: AppRootState) => mergedNodeSelector.selectAll(state))
    const quadtreeRef = useRef<null | QuadtreeNode>(null)

    useEffect(() => {
        if (previousSelectedIdRef.current !== selectedId) {
            const root = Quadtree.createRoot()
            const nodes = unfilteredNodes.filter((n) => n.id !== selectedId)
            nodes.forEach((n) => {
                Quadtree.insertNodeByPosition(root, n)
            })

            quadtreeRef.current = root
            previousSelectedIdRef.current = selectedId
        }
    }, [selectedId, previousSelectedIdRef, unfilteredNodes])

    return quadtreeRef
}