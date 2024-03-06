import type { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import Modal from "$feature/portal/components/Modal";
import "./style/pentagramInteractionModal.scss"

type PentagramInteractionModalProps = {
    title: string,
    isAuthor?: boolean,
    handleClickClose: () => void
    handleClickUpdate: () => void,
}

export default function PentagramInteractionModal(props: PentagramInteractionModalProps) {
    const { title, isAuthor, handleClickClose, handleClickUpdate } = props
    const { t } = useTranslation()

    const onClickUpdate = (e: MouseEvent) => {
        e.stopPropagation()
        handleClickUpdate()
    }

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="pentagram-innteraction-modal-component__inner-cotainer">
                {
                    isAuthor &&
                    <span 
                        className={[
                            "pentagram-innteraction-modal-component__interaction-button",
                            "pentagram-innteraction-modal-component__interaction-button--update"
                        ].join(' ')}
                        onClick={onClickUpdate}
                    >
                        {t("pentagram.interaction.update")}
                    </span>
                }
            </div>
        </Modal>
    )
}