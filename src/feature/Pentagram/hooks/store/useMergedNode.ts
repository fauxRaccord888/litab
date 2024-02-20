import type { AppRootState } from "$lib/stores/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { merge, nodeSelector, pendingChangeSelector, mergedNodeSelector } from "../../store/pentagramUpsertSlice"

export function useMergedNode(id: string) {
    const dispatch = useDispatch()
    
    const node = useSelector((state: AppRootState) => nodeSelector.selectById(state, id))
    const change = useSelector((state: AppRootState) => pendingChangeSelector.selectById(state, id))
    const mergedNode = useSelector((state: AppRootState) => mergedNodeSelector.selectById(state, id))

    useEffect(() => {
        dispatch(merge({
            node: node || null, 
            pendingChange: change || null
        }))
    }, [node, change, dispatch])

    return mergedNode
}