import type { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import Modal from "$feature/portal/components/Modal";
import Button from "$lib/components/common/Button";
import "./style/pentagramMenuModal.scss"

type PentagramMenuModalProps = {
    title: string,
    isAuthor?: boolean,
    handleClickClose: () => void
    handleClickUpdate: () => void,
}

export default function PentagramMenuModal(props: PentagramMenuModalProps) {
    const { title, isAuthor, handleClickClose, handleClickUpdate } = props
    const { t } = useTranslation()

    const onClickUpdate = (e: MouseEvent) => {
        e.stopPropagation()
        handleClickUpdate()
    }

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="pentagram-menu-modal-component__inner-cotainer">
                {
                    isAuthor &&
                    <Button 
                        className={[
                            "pentagram-menu-modal-component__button--update"
                        ].join(' ')}
                        onClick={onClickUpdate}
                    >
                        {t("pentagram.menu.update")}
                    </Button>
                }
            </div>
        </Modal>
    )
}