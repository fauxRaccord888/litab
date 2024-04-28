import type { MouseEvent } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "$feature/portal/components/Modal";
import Button from "$lib/components/common/Button";
import Confirm from "$feature/portal/components/Confirm";
import "./style/pentagramMenuModal.scss"

type PentagramMenuModalProps = {
    title: string,
    isAuthor?: boolean,
    handleClickClose: () => void
    handleClickUpdate: () => void,
    handleClickDelete: () => void,
    handleClickNavigate: () => void,
    handleClickDecoration: () => void
}

export default function PentagramMenuModal(props: PentagramMenuModalProps) {
    const { title, isAuthor, handleClickClose, handleClickUpdate, handleClickDecoration, handleClickDelete, handleClickNavigate } = props
    const { t } = useTranslation()
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    
    const onClickNavigate = (e: MouseEvent) => {
        e.stopPropagation()
        handleClickNavigate()
    }

    const onClickUpdate = (e: MouseEvent) => {
        e.stopPropagation()
        handleClickUpdate()
    }

    const onClickDecoration = (e: MouseEvent) => {
        e.stopPropagation()
        handleClickDecoration()
    }

    const onClickDelete = (e: MouseEvent) => {
        e.stopPropagation()
        setDeleteConfirm(true)
    }

    const handleConfirmDelete = () => {
        handleClickDelete()
        setDeleteConfirm(false)
    }

    const publicMenus = (
        <>
            <Button 
                className={[
                    "pentagram-menu-modal-component__button"
                ].join(' ')}
                onClick={onClickNavigate}
            >
                {t("pentagram.menu.navigate")}
            </Button>
        </>
    )

    const authorMenus = (
        <>
            <Button 
                className={[
                    "pentagram-menu-modal-component__button--update"
                ].join(' ')}
                onClick={onClickUpdate}
            >
                {t("pentagram.menu.update")}
            </Button>

            <Button 
                className={[
                    "pentagram-menu-modal-component__button--decoration"
                ].join(' ')}
                onClick={onClickDecoration}
            >
                {t("pentagram.menu.decoration")}
            </Button>

            <Button 
                className={[
                    "pentagram-menu-modal-component__button--delete"
                ].join(' ')}
                onClick={onClickDelete}
            >
                {t("pentagram.menu.delete")}
            </Button>
        </>
    )

    return (
        <>
            {deleteConfirm && 
                <Confirm 
                    destructive={true}
                    handleClickAffirmative={handleConfirmDelete}
                    handleClickNegative={() => setDeleteConfirm(false)}
                >
                    {t('portal.confirm.message.deletePentagram')}
                </Confirm>
            }
            <Modal title={title} handleClickClose={handleClickClose}>
                <div className="pentagram-menu-modal-component__inner-cotainer">
                    {publicMenus}
                    {isAuthor && authorMenus}
                </div>
            </Modal>
        </>
    )
}