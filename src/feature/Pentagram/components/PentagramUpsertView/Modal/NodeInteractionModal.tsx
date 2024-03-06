import { useTranslation } from "react-i18next";
import Modal from "$feature/portal/components/Modal";
import "./style/nodeInteractionModal.scss"
import { MouseEvent } from "react";

type NodeInteractionModalProps = {
    title: string,
    isDeleted?: boolean | null | undefined
    handleClickClose: () => void
    handleClickRecover: () => void,
    handleClickRemove: () => void,
}

export default function NodeInteractionModal(props: NodeInteractionModalProps) {
    const { title, isDeleted, handleClickClose, handleClickRecover, handleClickRemove } = props
    const { t } = useTranslation()

    const onClickRecover = (e: MouseEvent) => {
        e.stopPropagation()
        if (handleClickRecover) handleClickRecover()
    }

    const onClickRemove = (e: MouseEvent) => {
        e.stopPropagation()
        if (handleClickRemove) handleClickRemove()
    }

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="node-innteraction-modal-component__inner-cotainer">
                {
                    isDeleted &&
                    <span 
                        className={[
                            "node-innteraction-modal-component__interaction-button",
                            "node-innteraction-modal-component__interaction-button--recover"
                        ].join(' ')}
                        onClick={onClickRecover}
                    >
                        {t("pentagram.changes.recover")}
                    </span>
                }
                {
                    !isDeleted &&
                    <span 
                        className={[
                            "node-innteraction-modal-component__interaction-button",
                            "node-innteraction-modal-component__interaction-button--remove"
                        ].join(' ')}
                        onClick={onClickRemove}
                    >
                        {t("pentagram.changes.remove")}
                    </span>
                }
            </div>
        </Modal>
    )
}