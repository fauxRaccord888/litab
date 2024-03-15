import type { AppRootState } from "$lib/stores/store";
import { useSelector } from "react-redux";

export function useDescription() {
    const description = useSelector((state: AppRootState) => state.pentagramUpsert.description)
    return description
}