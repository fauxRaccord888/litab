import { useTranslation } from 'react-i18next';
import { useThrottledErrorToast } from '$lib/hooks';
import { useMergedNodeById, useNodeById, usePentagramModalEventHandler, useQuadtreeRef } from '$feature/Pentagram/hooks';
import toast from 'react-hot-toast';
import NodeMenuModal from '$feature/Pentagram/components/PentagramUpsertView/Modal/NodeMenuModal';

export default function NodeMenu(props: { nodeId: string; handleClickClose: () => void; }) {
    const { nodeId, handleClickClose } = props;
    const node = useNodeById(nodeId);
    const mergedNode = useMergedNodeById(nodeId);
    const quadtreeRef = useQuadtreeRef();

    const { handleRecover, handleRemoveNode } = usePentagramModalEventHandler(quadtreeRef);

    const { t } = useTranslation();
    const errorToast = useThrottledErrorToast();

    const title = t("modal.title.nodeMenu");
    const isDeleted = mergedNode?.deleted;

    const handleClickRecover = () => {
        errorToast(() => {
            handleRecover(nodeId);
            if (!node?.deleted) toast.success(t("pentagram.toast.success.revertChange"));
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
        <NodeMenuModal
            title={title}
            isDeleted={isDeleted}
            handleClickRecover={handleClickRecover}
            handleClickRemove={handleClickRemove}
            handleClickClose={handleClickClose} 
        />
    );
}
