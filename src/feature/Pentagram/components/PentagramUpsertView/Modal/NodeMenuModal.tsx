import type { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import Modal from "$feature/portal/components/Modal";
import Button from "$lib/components/common/Button";
import "./style/nodeMenuModal.scss"

type NodeMenuModalProps = {
    title: string,
    isDeleted?: boolean | null | undefined
    handleClickClose: () => void
    handleClickRecover: () => void,
    handleClickRemove: () => void,
}

export default function NodeMenuModal(props: NodeMenuModalProps) {
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
            <div className="node-menu-modal-component__inner-cotainer">
                {
                    isDeleted &&
                    <Button 
                        className={[
                            "node-menu-modal-component__button--recover"
                        ].join(' ')}
                        onClick={onClickRecover}
                    >
                        {t("node.menu.recover")}
                    </Button>
                }
                {
                    !isDeleted &&
                    <Button 
                        className={[
                            "node-menu-modal-component__button--remove"
                        ].join(' ')}
                        onClick={onClickRemove}
                    >
                        {t("node.menu.remove")}
                    </Button>
                }
            </div>
        </Modal>
    )
}