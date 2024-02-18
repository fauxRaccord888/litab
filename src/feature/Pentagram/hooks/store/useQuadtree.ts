import type { AppRootState } from "$lib/stores/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { nodeSelector, pendingNodeSelector } from "../../store/pentagramUpsertSlice"
import { buildQuadtree } from "../../store/quadtree"

export function useQuadtree() {
    const unfilteredNodes = useSelector((state: AppRootState) => nodeSelector.selectAll(state))
    const unfilteredPendingNodes = useSelector((state: AppRootState) => pendingNodeSelector.selectAll(state))
    const dispatch = useDispatch()

    useEffect(() => {
        const nodes = unfilteredNodes.filter((n) => !n.selected)
        const pendingNodes = unfilteredPendingNodes.filter((n) => !n.selected)
        dispatch(buildQuadtree({nodes, pendingNodes}))
    }, [dispatch, unfilteredNodes, unfilteredPendingNodes])
}

