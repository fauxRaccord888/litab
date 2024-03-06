import { Outlet, createFileRoute } from '@tanstack/react-router'

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useThrottledErrorToast } from '$lib/hooks';
import { 
    useMutationHandler,
    useMainPentagonEventHandler, 
    useMerge, 
    useMergedNode, 
    usePendingChangeListEventHandler, 
    usePentagramNavigate, 
    useQuadtreeRef, 
    useSelectedPosition, 
    useUnmergedChangeInfo, 
    useSetPentagramDescription
} from '$feature/Pentagram/hooks';

import toast from 'react-hot-toast';

import PentagramUpdateView from '$feature/Pentagram/components/PentagramUpsertView';
import LoadStoredChangeDialog from '$feature/Pentagram/components/PentagramUpsertView/Modal/LoadStoredChangeDialog';

export const Route = createFileRoute('/pentagram/create')({
    component: PentagramUpdate
})

function PentagramUpdate() {
    const { t } = useTranslation()
    const errorToast = useThrottledErrorToast()
    const navigate = usePentagramNavigate()

    useMerge()
    
    const mergedNodes = useMergedNode()
    const unmergedNodeInfos = useUnmergedChangeInfo()
    const { angle, distance } = useSelectedPosition()

    const parentRef = useRef<HTMLDivElement | null>(null)
    const quadtreeRef = useQuadtreeRef()

    const [description, handleSetDescription] = useSetPentagramDescription()
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
            navigate.view(result.id)
        })
    }

    return (
        <>
            <LoadStoredChangeDialog  pentagramId={""} />
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
                handleClickSelectedNode={(nodeId: string) => navigate.nodeInteractionOnCreate(nodeId)}
                handleClickSelectedPosition={() => navigate.addNodeOnCreate()}
                handleSetNewPosition={handleSetNewPosition}
                handleDragAndTouchMove={handleDragAndTouchMove}

                handleClickRevert={handleClickRevert}
            />
            <Outlet />
        </>
    )
}