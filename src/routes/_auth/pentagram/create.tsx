import type { CustomError } from '$lib/error';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import type { MouseEvent, TouchEvent } from 'react';
import { useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { useThrottle, useThrottledErrorToast } from '$lib/hooks';
import { useOeuvreNavigate, usePentagramNavigate, useUtilNavigate } from "$feature/navigate/hooks"
import { useCSSVariables } from '$lib/hooks/useCSSVariables';
import { 
    useMutationHandler,
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
import { t as translate } from 'i18next';
import { pentagramMutationErrorHandler } from '$feature/Pentagram/errorHandler';
import { Outlet, createFileRoute } from '@tanstack/react-router'


import PentagramUpdateView from '$feature/Pentagram/components/PentagramUpsertView';
import LoadStoredChangeDialog from '$feature/Pentagram/components/PentagramUpsertView/Modal/LoadStoredChangeDialog';

export const Route = createFileRoute('/_auth/pentagram/create')({
    component: PentagramInsert,
    beforeLoad: () => {
        return {
            getTitle: () => translate('pentagram.title.create')
        }
    },
})

function PentagramInsert() {
    const { t } = useTranslation()
    const throttle = useThrottle();
    const errorToast = useThrottledErrorToast()
    const STYLE = useCSSVariables()

    const utilNavigate = useUtilNavigate()
    const pentgramNavigate = usePentagramNavigate()
    const oeuvreNavigate = useOeuvreNavigate();

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

    const { handleInsertPentagram } = useMutationHandler()
    const handleClickSubmit = () => {
        const response = pentagramMutationErrorHandler(
            async () => {
                await handleInsertPentagram()
            }
        )

        toast.promise(response, {
            loading: t("pentagram.toast.loading.createPentagram"),
            success: t("pentagram.toast.success.createPentagram"),
            error: (error: CustomError) => t(error.i18nKey)
        })
        response.then(() => utilNavigate.feed())
    }

    const oeuvreEventHandler: OeuvreEventHandler = {
        selectOeuvre: (oeuvre) => oeuvreNavigate.select(oeuvre.id),
    }

    return (
        <>
            <LoadStoredChangeDialog pentagramId={null}/>
            <PentagramUpdateView
                ref={parentRef}

                title={t("pentagram.title.create")}
                handleSubmit={handleClickSubmit}

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
            <Outlet />
        </>
    )
}