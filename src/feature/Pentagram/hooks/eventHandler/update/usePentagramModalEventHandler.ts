import type { AppRootState } from '$lib/stores/store';
import type { DBOeuvre } from "$feature/Oeuvre/types";
import type { MutableRefObject } from "react"
import type { QuadtreeNode } from "../../../utils"
import { useDispatch, useSelector } from "react-redux"
import { useInsertSelectedInQuadtree } from '../..';
import { mergedNodeSelector, nodeSelector, recoverNode, removeNode, unselectSelected, upsertNode } from "../../../store/pentagramUpsertSlice"
import { checkCollidingOrThrow, checkOeuvreUniqueOrThrow } from "../../../utils";


export function usePentagramModalEventHandler(quadtreeRef: MutableRefObject<QuadtreeNode | null>) {
    const dispatch = useDispatch()
    const insertSelected = useInsertSelectedInQuadtree(quadtreeRef)
    const mergedNodes = useSelector((state: AppRootState) => mergedNodeSelector.selectEntities(state))
    const nodes = useSelector((state: AppRootState) => nodeSelector.selectEntities(state))

    const handleAddNode = (oeuvre: DBOeuvre) => {
        checkOeuvreUniqueOrThrow(mergedNodes, oeuvre)
        dispatch(upsertNode({ oeuvre }))
    }

    const handleRemoveNode = (id: string) => {
        dispatch(removeNode({ id }))
    }

    const handleRecover = (id: string) => {
        insertSelected();
        dispatch(unselectSelected());
        nodes[id] && checkCollidingOrThrow(nodes[id], quadtreeRef.current)

        dispatch(recoverNode({id}));
    }

    return { handleRemoveNode, handleRecover, handleAddNode, }
}
