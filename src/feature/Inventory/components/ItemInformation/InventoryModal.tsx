import type { DBDecoration, InventoryEventHandler } from "$feature/Inventory/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "$lib/components/common/Button";
import Confirm from "$feature/portal/components/Confirm";
import Modal from "$feature/portal/components/Modal";
import "./style/inventoryModal.scss"

type InventoryModalProps = {
    item: DBDecoration
    eventHandler: InventoryEventHandler,
    handleClickClose: () => void
}

export default function InventoryModal(props: InventoryModalProps) {
    const { item, eventHandler, handleClickClose } = props
    const category = item.type
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [renameConfrim, setRenameConfirm] = useState(false)
    const { t } = useTranslation();

    const handleRenameShadow = (name: string) => {
        if (eventHandler.handleRename) {
            const res = eventHandler.handleRename({
                name,
                category,
                id: item.id
            })
            res.then(() => {
                setRenameConfirm(false)
                handleClickClose()
            })
        }
    }

    const handleDeleteShadow = () => {
        if (eventHandler.handleDelete) {
            const res = eventHandler.handleDelete({
                category,
                id: item.id
            })
            res.then(() => {
                setDeleteConfirm(false)
                handleClickClose()
            })
        }
    }

    return (
        <>
            {deleteConfirm && 
                <Confirm
                    destructive={true}
                    handleClickAffirmative={handleDeleteShadow}
                    handleClickNegative={() => setDeleteConfirm(false)}
                >
                    {t(`inventory.${category}.confirm.delete`)}
                </Confirm>
            }
            {renameConfrim && 
                <Confirm
                    handleClickAffirmative={(inp) => handleRenameShadow(inp)}
                    handleClickNegative={() => setRenameConfirm(false)}
                    withInput={true}
                >
                    {t(`inventory.${category}.confirm.rename`)}
                </Confirm>
            }

            <Modal title={t('inventory.shadow.modal.title')} handleClickClose={handleClickClose}>
                <div className="inventory-modal-component__inner-cotainer">
                    <Button 
                        className="inventory-modal-component__button--update"
                        onClick={() => setRenameConfirm(true)}
                    >
                        {t(`inventory.${category}.modal.button.rename`)}
                    </Button>
                    <Button
                        className="inventory-modal-component__button--delete"
                        onClick={() => setDeleteConfirm(true)}
                    >
                        {t(`inventory.${category}.modal.button.delete`)}
                    </Button>
                </div>
            </Modal>
        </>
    )
}