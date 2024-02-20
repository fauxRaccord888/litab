import type { AppRootState } from "$lib/stores/store"
import type { DBPentagram } from "../../types"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initialize, nodeSelector, pendingChangeSelector } from "../../store/pentagramUpsertSlice"

export function useInitialize(nodes: DBPentagram["pentagrams_nodesCollection"]) {
    const dispatch = useDispatch()
    const nodeIds = useSelector((state: AppRootState) => nodeSelector.selectIds(state))
    const changeIds = useSelector((state: AppRootState) => pendingChangeSelector.selectIds(state))

    useEffect(() => {
        dispatch(initialize({nodes}))
    }, [nodes, dispatch])

    return Array.from(new Set([...nodeIds, ...changeIds]))
}