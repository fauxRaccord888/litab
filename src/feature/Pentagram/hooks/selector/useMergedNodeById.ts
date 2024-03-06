import type { AppRootState } from "$lib/stores/store"
import { useSelector } from "react-redux"
import { mergedNodeSelector } from "../../store/pentagramUpsertSlice"

export function useMergedNodeById(nodeId: string) {
    const mergedNode = useSelector((state: AppRootState) => mergedNodeSelector.selectById(state, nodeId))
    return mergedNode
}