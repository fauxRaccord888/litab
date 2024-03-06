import type { AppRootState } from "$lib/stores/store"
import { useSelector } from "react-redux"
import { nodeSelector } from "../../store/pentagramUpsertSlice"

export function useNodeById(nodeId: string) {
    const node = useSelector((state: AppRootState) => nodeSelector.selectById(state, nodeId))
    return node
}