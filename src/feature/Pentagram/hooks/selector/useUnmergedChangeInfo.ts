import type { AppRootState } from "$lib/stores/store"
import type { IUnmergedChangeInfo } from "../../store/pentagramUpsertSlice/interface"
import { useSelector } from "react-redux"
import { nodeSelector, pendingChangeSelector } from "../../store/pentagramUpsertSlice"

export function useUnmergedChangeInfo() {
    const nodes = useSelector((state: AppRootState) => nodeSelector.selectEntities(state))
    const changes = useSelector((state: AppRootState) => pendingChangeSelector.selectEntities(state))

    const ids = Object.keys(changes)
    const result: Record<string, IUnmergedChangeInfo> = {}
    
    for (const id of ids) {
        result[id] = {
            id,
            node: nodes[id],
            change: changes[id]
        }
    }

    return Object.values(result)
}