import type { AppRootState } from "$lib/stores/store";
import { useSelector } from "react-redux";

export function useSelected(id: string) {
    const selectedId = useSelector((state: AppRootState) => state.pentagramUpsert.selected)
    return id === selectedId
}