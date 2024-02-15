import type { AppRootState } from "$lib/stores/store"
import type { DBPentagram } from "../../types" 
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initialize, nodeSelector, mergeWorkingTree, pendingNodeSelector } from "../../store/pentagramUpsertSlice"

export function usePentagramNodes(
    nodes: DBPentagram["pentagrams_nodesCollection"]
) {
    const dispatch = useDispatch()
    const nodeIds = useSelector((state: AppRootState) => nodeSelector.selectIds(state)).map((id) => ({id}))
    const pendingNodeIds = useSelector((state: AppRootState) => pendingNodeSelector.selectIds(state)).map((id) => ({id}))

    useEffect(() => {
        dispatch(initialize({ nodes }))
        // TODO 조건부 Merge
        dispatch(mergeWorkingTree())
    }, [dispatch, nodes])

    return { nodeIds, pendingNodeIds }
}