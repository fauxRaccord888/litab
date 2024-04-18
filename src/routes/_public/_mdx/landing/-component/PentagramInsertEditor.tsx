import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import type { MouseEvent, TouchEvent } from 'react';
import { useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { useThrottle, useThrottledErrorToast } from '$lib/hooks';
import { useOeuvreNavigate, usePentagramNavigate } from "$feature/navigate/hooks"
import { useCSSVariables } from '$lib/hooks';
import { 
    useMainPentagonEventHandler, 
    useMerge, 
    useMergedNode, 
    usePendingChangeListEventHandler, 
    useQuadtreeRef, 
    useSelectedPosition, 
    useUnmergedChangeInfo, 
    useInitialize,
} from '$feature/Pentagram/hooks';

import toast from 'react-hot-toast';

import LoadStoredChangeDialog from '$feature/Pentagram/components/PentagramUpsertView/Modal/LoadStoredChangeDialog';
import PentagramUpsertEditor from '$feature/Pentagram/components/PentagramUpsertView/PentagramUpsertEditor';

export default function PentagramInsertEditor() {
    const { t } = useTranslation()
    const throttle = useThrottle();
    const errorToast = useThrottledErrorToast()
    const pentgramNavigate = usePentagramNavigate()
    const oeuvreNavigate = useOeuvreNavigate();
    const STYLE = useCSSVariables()

    useInitialize(null)
    useMerge()
    
    const mergedNodes = useMergedNode()
    const unmergedNodeInfos = useUnmergedChangeInfo()
    const { angle, distance } = useSelectedPosition()

    const parentRef = useRef<HTMLDivElement | null>(null)
    const quadtreeRef = useQuadtreeRef()

    const { 
        handleSelectNode, 
        handleSetNewPosition, 
        handleDragAndTouchMove 
    } = useMainPentagonEventHandler(parentRef, quadtreeRef, STYLE)
    
    const handleSetNewPositionWithErrorToast = (e: MouseEvent<HTMLDivElement>) => {
        const throttled = () => throttle(
            () => handleSetNewPosition(e)
        )
        errorToast(async () => await throttled())
    }

    const handleDragAndTouchMoveWithErrorToast = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
        const throttled = () => throttle(
            () => handleDragAndTouchMove(e)
        )
        errorToast(async () => await throttled())
    }

    const { handleRevertChange } = usePendingChangeListEventHandler(quadtreeRef)
    const handleClickRevert = (id: string) => {
        errorToast(() => {
            handleRevertChange(id)
            toast.success(t("pentagram.toast.success.revertChange"))
        })
    }

    const oeuvreEventHandler: OeuvreEventHandler = {
        selectOeuvre: (oeuvre) => oeuvreNavigate.select(oeuvre.id),
    }

    return (
        <>
            <LoadStoredChangeDialog pentagramId={null}/>
            <PentagramUpsertEditor
                ref={parentRef}

                mergedNodes={mergedNodes}
                unmergedNodeInfos={unmergedNodeInfos}

                parentRef={parentRef}

                angle={angle}
                distance={distance}
                
                handleClickNode={handleSelectNode}
                handleClickSelectedNode={(nodeId: string) => pentgramNavigate.nodeUpsertModal(nodeId)}
                handleClickSelectedPosition={() => pentgramNavigate.nodeInsertModal()}
                handleSetNewPosition={handleSetNewPositionWithErrorToast}
                handleDragAndTouchMove={handleDragAndTouchMoveWithErrorToast}

                handleClickRevert={handleClickRevert}

                eventHandler={oeuvreEventHandler}
            />
        </>
    )
}