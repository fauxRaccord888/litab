import { useTranslation } from "react-i18next";
import Modal from "$feature/portal/components/Modal";
import "./style/nodeInteractionModal.scss"

type NodeInteractionModalProps = {
    title: string,
    isDeleted?: boolean | undefined
    handleClickClose: () => void
    handleClickRecover: () => void,
    handleClickRemove: () => void,
}

export default function NodeInteractionModal(props: NodeInteractionModalProps) {
    const { title, isDeleted, handleClickClose, handleClickRecover, handleClickRemove } = props
    const { t } = useTranslation()

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="node-innteraction-modal-inner-cotainer">
                {
                    isDeleted &&
                    <span 
                        className="node-interaction recover"
                        onClick={handleClickRecover}
                    >
                        {t("pentagram.update.recoverNode")}
                    </span>
                }
                {
                    !isDeleted &&
                    <span 
                        className="node-interaction remove"
                        onClick={handleClickRemove}
                    >
                        {t("pentagram.update.removeNode")}
                    </span>
                }
            </div>
        </Modal>
    )
}