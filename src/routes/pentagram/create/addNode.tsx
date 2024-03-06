import type { DBOeuvre } from '$feature/Oeuvre/types';
import { useTranslation } from 'react-i18next';
import { useThrottledErrorToast } from '$lib/hooks';
import { usePentagramAddModalEventHandler, usePentagramNavigate } from '$feature/Pentagram/hooks';
import { createFileRoute } from '@tanstack/react-router'
import toast from 'react-hot-toast';
import AddNodeModal from "$feature/Pentagram/components/PentagramUpsertView/Modal/AddNodeModal"

export const Route = createFileRoute('/pentagram/create/addNode')({
    component: PentagramInsertAddNode
})

function PentagramInsertAddNode() {
    const { t } = useTranslation()
    const { handleAddNode } = usePentagramAddModalEventHandler()
    const errorToast = useThrottledErrorToast()
    const navigate = usePentagramNavigate()
    const title = t("modal.title.addNode")

    const handleClickClose = () => {
        navigate.create()
    }

    const handleClickAddNode = (item: DBOeuvre) => {
        errorToast(()=> {
            handleAddNode(item)
            toast.success(t("pentagram.toast.success.addNode"))
            handleClickClose()
        })
    }

    return (
        <AddNodeModal 
            title={title}
            handleAddNode={handleClickAddNode}
            handleClickClose={handleClickClose}
        />
    )
}