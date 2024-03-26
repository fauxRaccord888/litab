import type { CustomError } from '$lib/error';
import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import type { MouseEvent, TouchEvent } from 'react';
import { useRef } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next';
import { useThrottle, useThrottledErrorToast } from '$lib/hooks';
import { useOeuvreNavigate, usePentagramNavigate } from "$feature/navigate/hooks"
import { 
    useMutationHandler,
    useMainPentagonEventHandler, 
    useMerge, 
    useMergedNode, 
    usePendingChangeListEventHandler, 
    useQuadtreeRef, 
    useSelectedPosition, 
    useUnmergedChangeInfo, 
    useSetPentagramDescription,
    useInitialize,
    useDescription
} from '$feature/Pentagram/hooks';

import toast from 'react-hot-toast';
import { t as translate } from 'i18next';
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
    const navigate = useNavigate()
    const pentgramNavigate = usePentagramNavigate()
    const oeuvreNavigate = useOeuvreNavigate();

    useInitialize(null)
    useMerge()
    
    const mergedNodes = useMergedNode()
    const unmergedNodeInfos = useUnmergedChangeInfo()
    const description = useDescription()
    const { angle, distance } = useSelectedPosition()

    const parentRef = useRef<HTMLDivElement | null>(null)
    const quadtreeRef = useQuadtreeRef()

    const { handleSetDescription } = useSetPentagramDescription()
    const { handleSelectNode, handleSetNewPosition, handleDragAndTouchMove } = useMainPentagonEventHandler(parentRef, quadtreeRef)
    
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
        const response = handleInsertPentagram()
        toast.promise(response, {
            loading: t("pentagram.toast.loading.createPentagram"),
            success: t("pentagram.toast.success.createPentagram"),
            error: (error: CustomError) => t(error.i18nKey)
        })
        response.then(() => navigate({ to: '/feed' }))
    }

    const oeuvreEventHandler: OeuvreEventHandler = {
        selectOeuvre: (oeuvreId: string) => oeuvreNavigate.select(oeuvreId),
    }

    return (
        <>
            <LoadStoredChangeDialog pentagramId={null} description={""}/>
            <PentagramUpdateView
                ref={parentRef}

                title={t("pentagram.title.create")}
                description={description}
                handleSubmit={handleClickSubmit}

                mergedNodes={mergedNodes}
                unmergedNodeInfos={unmergedNodeInfos}

                parentRef={parentRef}

                angle={angle}
                distance={distance}

                handleSetDescription={handleSetDescription}
                
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