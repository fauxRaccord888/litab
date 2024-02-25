import type { AppRootState } from '$lib/stores/store';
import type { DBOeuvre } from "$feature/Oeuvre/types";
import { useDispatch, useSelector } from "react-redux"
import { removeNode, upsertNode } from "../../store/pentagramUpsertSlice"
import { checkOeuvreUniqueOrThrow } from "$feature/Pentagram/utils";


export function usePentagramModalEventHandler() {
    const dispatch = useDispatch()
    const { entities } = useSelector((state: AppRootState) => state.pentagramUpsert.mergedNode)

    const handleAddNode = (oeuvres: DBOeuvre) => {
        checkOeuvreUniqueOrThrow(entities, oeuvres)
        dispatch(upsertNode({ oeuvres }))
    }

    const handleRemoveNode = (id: string) => {
        dispatch(removeNode({ id }))
    }

    return {handleRemoveNode, handleAddNode}
}
