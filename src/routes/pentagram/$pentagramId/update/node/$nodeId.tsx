import { useTranslation } from 'react-i18next';
import { useThrottledErrorToast } from '$lib/hooks';
import { 
    useMergedNodeById,
    useNodeById,
    usePentagramInteractionEventHandler, 
    usePentagramNavigate, 
    useQuadtreeRef 
} from '$feature/Pentagram/hooks';
import { createFileRoute } from '@tanstack/react-router'
import toast from 'react-hot-toast';
import NodeInteractionModal from '$feature/Pentagram/components/PentagramUpsertView/Modal/NodeInteractionModal';

export const Route = createFileRoute('/pentagram/$pentagramId/update/node/$nodeId')({
    component: PentagramNodeInteraction
})

function PentagramNodeInteraction() {
    const { pentagramId, nodeId } = Route.useParams()
    const node = useNodeById(nodeId)
    const mergedNode = useMergedNodeById(nodeId)
    const quadtreeRef = useQuadtreeRef() 
    
    const { handleRecover, handleRemoveNode } = usePentagramInteractionEventHandler(quadtreeRef)

    const { t } = useTranslation()
    const navigate = usePentagramNavigate()
    const errorToast = useThrottledErrorToast()

    const title = t("modal.title.nodeInteraction")
    const isDeleted = mergedNode.deleted

    const handleClickClose = () => {
        navigate.update(pentagramId)
    }

    const handleClickRecover = () => {
        errorToast(() => {
            handleRecover(nodeId)
            if (!node.deleted) toast.success(t("pentagram.toast.success.revertChange"))
            else toast.success(t("pentagram.toast.success.recoverNode"))
            navigate.update(pentagramId)
        })
    }

    const handleClickRemove = () => {
        handleRemoveNode(nodeId)
        if (!node) toast.success(t("pentagram.toast.success.revertChange"))
        else toast.success(t("pentagram.toast.success.removeNode"))
        navigate.update(pentagramId)
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