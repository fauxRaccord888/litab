import type { MouseEvent, MutableRefObject, TouchEvent } from "react"
import type { QuadtreeNode } from "../../../utils"
import type { useCSSVariables } from "$lib/hooks/useCSSVariables";

import { useDispatch } from "react-redux"
import { useInsertSelectedInQuadtree } from '../..';
import { unselectSelected, setSelected, setPosition } from "../../../store/pentagramUpsertSlice"
import { checkCollidingOrThrow, getAngleAndDisctanceOrThrow } from '../../../utils';

export function useMainPentagonEventHandler(
    parentRef: MutableRefObject<HTMLDivElement | null>, 
    quadtreeRef: MutableRefObject<QuadtreeNode | null>,
    STYLE: ReturnType<typeof useCSSVariables>
) {
    const dispatch = useDispatch()
    const insertSelected = useInsertSelectedInQuadtree(quadtreeRef)

    const handleSelectNode = (id: string) => {
        dispatch(setSelected({ id }))
    }

    const handleSetNewPosition = (e: MouseEvent<HTMLDivElement>) => {
        insertSelected();
        const { angle, distance } = getAngleAndDisctanceOrThrow(e, parentRef.current, undefined, STYLE)
        checkCollidingOrThrow({ angle, distance }, quadtreeRef.current)

        dispatch(unselectSelected())
        dispatch(setPosition({ angle, distance }))
    }

    const handleDragAndTouchMove = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {       
        const target = ("touches" in e) ? e.touches[0] : e 

        const { angle, distance } = getAngleAndDisctanceOrThrow(target, parentRef.current, undefined, STYLE)
        checkCollidingOrThrow({ angle, distance }, quadtreeRef.current)
    
        dispatch(setPosition({ angle, distance }))
    }

    return { handleSelectNode, handleSetNewPosition, handleDragAndTouchMove }
}    
