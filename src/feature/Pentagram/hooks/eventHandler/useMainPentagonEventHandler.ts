import type { MouseEvent, MutableRefObject, TouchEvent } from "react"
import type { QuadtreeNode } from "../../utils"

import { useDispatch } from "react-redux"
import { useThrottle, useThrottledErrorToast } from "$lib/hooks"
import { useInsertSelectedInQuadtree } from '..';
import { unselectSelected, setSelected, setPosition } from "../../store/pentagramUpsertSlice"
import { checkCollidingOrThrow, getAngleAndDisctanceOrThrow } from '../../utils';

export function useMainPentagonEventHandler(
    parentRef: MutableRefObject<HTMLDivElement | null>, 
    quadtreeRef: MutableRefObject<QuadtreeNode | null>
) {
    const dispatch = useDispatch()
    const throttle = useThrottle()
    const insertSelected = useInsertSelectedInQuadtree(quadtreeRef)
    const errorToast = useThrottledErrorToast()

    const handleSelectNode = (e :MouseEvent, id: string) => {
        e.stopPropagation()
        dispatch(setSelected({ id }))
    }

    const handleSetNewPosition = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        errorToast(
            () => {
                insertSelected();
        
                const { angle, distance } = getAngleAndDisctanceOrThrow(e, e.currentTarget)
                checkCollidingOrThrow({ angle, distance }, quadtreeRef.current)
        
                dispatch(unselectSelected())
                dispatch(setPosition({ angle, distance }))
            }
        )
    }

    const handleDragAndTouchMove = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
        e.stopPropagation()
        
        throttle(
            () => {
                const target = ("touches" in e) ? e.touches[0] : e 
        
                const { angle, distance } = getAngleAndDisctanceOrThrow(target, parentRef.current)
                checkCollidingOrThrow({ angle, distance }, quadtreeRef.current)
            
                dispatch(setPosition({ angle, distance }))
            }
        , 30)
    }

    return { handleSelectNode, handleSetNewPosition, handleDragAndTouchMove }
}    
