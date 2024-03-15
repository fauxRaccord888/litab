import { useTranslation } from 'react-i18next';
import { useThrottledErrorToast } from '$lib/hooks';
import { useMergedNodeById, useNodeById, usePentagramInteractionEventHandler, useQuadtreeRef } from '$feature/Pentagram/hooks';
import toast from 'react-hot-toast';
import NodeInteractionModal from '$feature/Pentagram/components/PentagramUpsertView/Modal/NodeInteractionModal';

export default function NodeUpsertDetailModal(props: { nodeId: string; handleClickClose: () => void; }) {
    const { nodeId, handleClickClose } = props;
    const node = useNodeById(nodeId);
    const mergedNode = useMergedNodeById(nodeId);
    const quadtreeRef = useQuadtreeRef();

    const { handleRecover, handleRemoveNode } = usePentagramInteractionEventHandler(quadtreeRef);

    const { t } = useTranslation();
    const errorToast = useThrottledErrorToast();

    const title = t("modal.title.nodeInteraction");
    const isDeleted = mergedNode.deleted;

    const handleClickRecover = () => {
        errorToast(() => {
            handleRecover(nodeId);
            if (!node.deleted) toast.success(t("pentagram.toast.success.revertChange"));
            else toast.success(t("pentagram.toast.success.recoverNode"));
            handleClickClose();
        });
    };

    const handleClickRemove = () => {
        handleRemoveNode(nodeId);
        if (!node) toast.success(t("pentagram.toast.success.revertChange"));
        else toast.success(t("pentagram.toast.success.removeNode"));
        handleClickClose();
    };

    return (
        <NodeInteractionModal
            title={title}
            isDeleted={isDeleted}
            handleClickRecover={handleClickRecover}
            handleClickRemove={handleClickRemove}
            handleClickClose={handleClickClose} 
        />
    );
}
