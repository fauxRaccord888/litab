import type { AppRootState } from "$lib/stores/store"
import type { DBPentagram } from "../../types" 
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initialize, subNodeSelector, mainNodeSelector, mergeWorkingTree, pendingNodeSelector } from "../../store/pentagramUpsertSlice"

export function usePentagramNodes(
    mainNodes: DBPentagram["pentagrams_oeuvresCollection"],
    subNodes: DBPentagram["pentagrams_nodesCollection"]
) {
    const dispatch = useDispatch()
    const mainNodeIds = useSelector((state: AppRootState) => mainNodeSelector.selectIds(state)).map((id) => ({id}))
    const subNodeIds = useSelector((state: AppRootState) => subNodeSelector.selectIds(state)).map((id) => ({id}))
    const pendingNodeIds = useSelector((state: AppRootState) => pendingNodeSelector.selectIds(state)).map((id) => ({id}))

    useEffect(() => {
        dispatch(initialize({ mainNodes, subNodes }))
        // TODO 조건부 Merge
        dispatch(mergeWorkingTree())
    }, [dispatch, mainNodes, subNodes])

    return { mainNodeIds, subNodeIds, pendingNodeIds }
}