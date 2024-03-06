import type { AppRootState } from "$lib/stores/store"
import type { MutableRefObject } from "react"
import type { QuadtreeNode } from "../../../utils"
import { useDispatch, useSelector } from "react-redux"
import { useInsertSelectedInQuadtree } from "../.."
import { revertChange, unselectSelected, nodeSelector, pendingChangeSelector } from "../../../store/pentagramUpsertSlice"
import { checkCollidingOrThrow } from "../../../utils"

export function usePendingChangeListEventHandler(quadtreeRef: MutableRefObject<QuadtreeNode | null>) {
    const dispatch = useDispatch()
    const nodes = useSelector((state: AppRootState) => nodeSelector.selectEntities(state))
    const changes = useSelector((state: AppRootState) => pendingChangeSelector.selectEntities(state))
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
