import type { AppRootState } from "$lib/stores/store"
import { useSelector } from "react-redux"

export function useSelectedPosition() {
    const selectedPosition = useSelector((state: AppRootState) => state.pentagramUpsert.selectedPosition)
    return selectedPosition
}