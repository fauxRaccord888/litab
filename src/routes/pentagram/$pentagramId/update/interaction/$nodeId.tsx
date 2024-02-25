import type { AppRootState } from '$lib/stores/store';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useThrottledErrorToast } from '$lib/hooks';
import { usePendingChangeListEventHandler, usePentagramModalEventHandler, usePentagramNavigation, useQuadtreeRef } from '$feature/Pentagram/hooks';
import { pendingChangeSelector } from '$feature/Pentagram/store/pentagramUpsertSlice';
import { createFileRoute } from '@tanstack/react-router'
import toast from 'react-hot-toast';
import NodeInteractionModal from '$feature/Pentagram/components/PentagramUpdateView/Modal/NodeInteractionModal';

export const Route = createFileRoute('/pentagram/$pentagramId/update/interaction/$nodeId')({
    component: PentagramNodeInteraction
})

function PentagramNodeInteraction() {
    const { pentagramId, nodeId } = Route.useParams()
    const change = useSelector((state: AppRootState) => pendingChangeSelector.selectById(state, nodeId))
    const quadtreeRef = useQuadtreeRef() // TODO 부모 라우트에서 ref를 전달 받지 않음 - quadref가 이중으로 호출 (성능 이외의 문제는 없음)
    
    const { handleRevertChange } = usePendingChangeListEventHandler(quadtreeRef)
    const { handleRemoveNode } = usePentagramModalEventHandler()

    const { t } = useTranslation()
    const navigate = usePentagramNavigation()
    const errorToast = useThrottledErrorToast()

    const title = t("modal.title.nodeInteraction")
    const isDeleted = change && change.changeType === "remove"

    const handleClickClose = () => {
        navigate.pentagram(pentagramId)
    }

    const handleClickRecover = () => {
        errorToast(() => {
            handleRevertChange(nodeId)
            toast.success(t("pentagram.toast.success.revertChange"))
            navigate.pentagram(pentagramId)
        })
    }

    const handleClickRemove = () => {
        handleRemoveNode(nodeId)
        toast.success(t("pentagram.toast.success.removeNode"))
        navigate.pentagram(pentagramId)
    }

    return (
        <NodeInteractionModal 
            title={title}
            isDeleted={isDeleted}
            handleClickRecover={handleClickRecover}
            handleClickRemove={handleClickRemove}
            handleClickClose={handleClickClose}
        />
    )
}