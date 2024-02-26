import type { AppRootState } from "$lib/stores/store"
import type { MutableRefObject } from "react"
import type { QuadtreeNode } from "../../utils"
import { useDispatch, useSelector } from "react-redux"
import { useInsertSelectedInQuadtree } from ".."
import { checkCollidingOrThrow } from "../../utils"
import { revertChange, unselectSelected } from "../../store/pentagramUpsertSlice"

export function usePendingChangeListEventHandler(quadtreeRef: MutableRefObject<QuadtreeNode | null>) {
    const dispatch = useDispatch()
    const { entities: nodes } = useSelector((state: AppRootState) => state.pentagramUpsert.node)
    const { entities: changes } = useSelector((state: AppRootState) => state.pentagramUpsert.pendingChange)
    const insertSelected = useInsertSelectedInQuadtree(quadtreeRef)

    const handleRevertChange = (id: string) => {
        insertSelected();
        dispatch(unselectSelected());

        (
            (changes[id].changeType === "remove" || changes[id].changeType === "update") &&
            nodes[id] && 
            checkCollidingOrThrow(nodes[id], quadtreeRef.current)
        );

        dispatch(revertChange({id}));
    }

    return { handleRevertChange }
}
