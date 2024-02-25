import type { AppRootState } from "$lib/stores/store"
import { useSelector } from "react-redux"
import { mergedNodeSelector } from "../../store/pentagramUpsertSlice"

export function useMergedNode() {
    const mergedNode = useSelector((state: AppRootState) => mergedNodeSelector.selectAll(state))
    return mergedNode
}