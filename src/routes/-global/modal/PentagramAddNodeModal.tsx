import type { DBMiniOeuvre } from '$feature/Oeuvre/types';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useThrottledErrorToast } from '$lib/hooks';
import { usePentagramAddModalEventHandler } from '$feature/Pentagram/hooks';
import AddNodeModal from '$feature/Pentagram/components/PentagramUpsertView/Modal/AddNodeModal';

export function PentagramAddNodeModal(props: { handleClickClose: () => void; }) {
    const { handleClickClose } = props;
    const { t } = useTranslation();
    const { handleAddNode } = usePentagramAddModalEventHandler();
    const errorToast = useThrottledErrorToast();
    const title = t("modal.title.addNode");

    const handleClickAddNode = (item: DBMiniOeuvre) => {
        errorToast(() => {
            handleAddNode(item);
            toast.success(t("pentagram.toast.success.addNode"));
            handleClickClose();
        });
    };

    return (
        <AddNodeModal
            title={title}
            handleAddNode={handleClickAddNode}
            handleClickClose={handleClickClose} />
    );
}
