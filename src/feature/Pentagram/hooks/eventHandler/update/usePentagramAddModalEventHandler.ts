import type { AppRootState } from '$lib/stores/store';
import type { DBOeuvre } from "$feature/Oeuvre/types";
import { useDispatch, useSelector } from "react-redux"
import { mergedNodeSelector, upsertNode } from "../../../store/pentagramUpsertSlice"
import { checkOeuvreUniqueOrThrow } from "../../../utils";

export function usePentagramAddModalEventHandler() {
    const dispatch = useDispatch()
    const mergedNodes = useSelector((state: AppRootState) => mergedNodeSelector.selectEntities(state))

    const handleAddNode = (oeuvre: DBOeuvre) => {
        checkOeuvreUniqueOrThrow(mergedNodes, oeuvre)
        dispatch(upsertNode({ oeuvre }))
    }

    return { handleAddNode, }
}
