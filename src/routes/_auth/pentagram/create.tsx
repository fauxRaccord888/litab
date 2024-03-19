import type { OeuvreEventHandler } from '$feature/Oeuvre/types';
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useThrottledErrorToast } from '$lib/hooks';
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

import PentagramUpdateView from '$feature/Pentagram/components/PentagramUpsertView';
import LoadStoredChangeDialog from '$feature/Pentagram/components/PentagramUpsertView/Modal/LoadStoredChangeDialog';

export type PentagramInsertRoute = typeof Route

export const Route = createFileRoute('/_auth/pentagram/create')({
    component: PentagramInsert
})

function PentagramInsert() {
    const { t } = useTranslation()
    const errorToast = useThrottledErrorToast()
    const navigate = usePentagramNavigate()
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

    const { handleRevertChange } = usePendingChangeListEventHandler(quadtreeRef)
    const handleClickRevert = (id: string) => {
        errorToast(() => {
            handleRevertChange(id)
            toast.success(t("pentagram.toast.success.revertChange"))
        })
    }

    const { handleInsertPentagram } = useMutationHandler()
    const handleClickSubmit = () => {
        errorToast(async () => {
            const result = await handleInsertPentagram()
            toast.success(t("pentagram.toast.success.createPentagram"))
            navigate.select(result)
        })
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
                handleClickSelectedNode={(nodeId: string) => navigate.nodeUpsertDetail(nodeId, Route.fullPath)}
                handleClickSelectedPosition={() => navigate.nodeInsertDetail(Route.fullPath)}
                handleSetNewPosition={handleSetNewPosition}
                handleDragAndTouchMove={handleDragAndTouchMove}

                handleClickRevert={handleClickRevert}

                eventHandler={oeuvreEventHandler}
            />
            <Outlet />
        </>
    )
}