import type { AppRootState } from "$lib/stores/store"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { merge, mergedNodeSelector, nodeSelector, pendingChangeSelector } from "../../store/pentagramUpsertSlice"
import { deepCompare } from "$lib/utils" 


export function useMerge() {
    const dispatch = useDispatch()
    
    const prevSelectedIdRef = useRef<null | typeof selectedId> (null)
    const prevChangesRef = useRef<null | typeof changes>(null)

    const selectedId = useSelector((state: AppRootState) => state.pentagramUpsert.selected)
    const nodes = useSelector((state: AppRootState) => nodeSelector.selectEntities(state))
    const changes = useSelector((state: AppRootState) => pendingChangeSelector.selectEntities(state))
    const mergedNodeIds = useSelector((state: AppRootState) => mergedNodeSelector.selectIds(state))

    useEffect(() => {
        const ids = new Set([...Object.keys(nodes), ...Object.keys(changes), ...mergedNodeIds])
        const prevChanges = prevChangesRef.current
        const prevSelectedId = prevSelectedIdRef.current
        
        ids.forEach((id) => {
            const needMerge = (
                !prevChanges ||
                Object.keys(prevChanges).length === 0 ||
                id === selectedId ||
                id === prevSelectedId ||
                !deepCompare(prevChanges[id], changes[id])
            )
            if (!needMerge) return
            dispatch(
                merge({
                    id,
                    node: nodes[id] || null, 
                    pendingChange: changes[id] || null
                })
            )
        })

        prevChangesRef.current = changes
        prevSelectedIdRef.current = selectedId

    }, [nodes, changes, mergedNodeIds, selectedId, dispatch])
}