import type { GetPentagramUpdateInfoByIdQuery } from '$lib/graphql/__generated__/graphql';
import { Outlet, createFileRoute } from '@tanstack/react-router'

import { useRef } from 'react';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useThrottledErrorToast } from '$lib/hooks';
import { 
    useInitialize, 
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
import { getPentagramUpdateInfoById_QUERY } from '$feature/Pentagram/graphql';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';

import PentagramUpdateView from '$feature/Pentagram/components/PentagramUpsertView';
import LoadStoredChangeDialog from '$feature/Pentagram/components/PentagramUpsertView/Modal/LoadStoredChangeDialog';

export const Route = createFileRoute('/pentagram/$pentagramId/update')({
    component: PentagramUpdate
})

function PentagramUpdate() {
    const { pentagramId } = Route.useParams()
    const { t } = useTranslation()
    const errorToast = useThrottledErrorToast()
    const navigate = usePentagramNavigate()

    const { data } = useQuery<GetPentagramUpdateInfoByIdQuery>(getPentagramUpdateInfoById_QUERY, {
        variables: { id: pentagramId }
    })
    const firstNode = getFirstNodeOfCollection(data?.pentagramsCollection)

    useInitialize(firstNode)
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

    const { handleUpdatePentagram } = useMutationHandler()
    const handleClickSubmit = () => {
        errorToast(() => {
            handleUpdatePentagram(pentagramId)
            toast.success(t("pentagram.toast.success.updatePentagram"))
            navigate.view(pentagramId)
        })
    }


    // TODO THROW ERROR + AUTH
    if (!firstNode) return <></>

    return (
        <>
            <LoadStoredChangeDialog  pentagramId={pentagramId} />
            <PentagramUpdateView
                ref={parentRef}

                title={t("pentagram.title.edit")}
                description={description}
                handleSubmit={handleClickSubmit}

                mergedNodes={mergedNodes}
                unmergedNodeInfos={unmergedNodeInfos}

                parentRef={parentRef}

                angle={angle}
                distance={distance}

                handleSetDescription={handleSetDescription}
                
                handleClickNode={handleSelectNode}
                handleClickSelectedNode={(nodeId: string) => navigate.nodeInteractionOnUpdate(pentagramId, nodeId)}
                handleClickSelectedPosition={() => navigate.addNodeOnUpdate(pentagramId)}
                handleSetNewPosition={handleSetNewPosition}
                handleDragAndTouchMove={handleDragAndTouchMove}

                handleClickRevert={handleClickRevert}
            />
            <Outlet />
        </>
    )
}