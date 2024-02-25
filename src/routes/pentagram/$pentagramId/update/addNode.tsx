import type { DBOeuvre } from '$feature/Oeuvre/types';
import { useTranslation } from 'react-i18next';
import { useThrottledErrorToast } from '$lib/hooks';
import { usePentagramModalEventHandler, usePentagramNavigation } from '$feature/Pentagram/hooks';
import { createFileRoute } from '@tanstack/react-router'
import toast from 'react-hot-toast';
import AddNodeModal from "$feature/Pentagram/components/PentagramUpdateView/Modal/AddNodeModal"

export const Route = createFileRoute('/pentagram/$pentagramId/update/addNode')({
    component: PentagramUpdateAddNode
})

function PentagramUpdateAddNode() {
    const { t } = useTranslation()
    const { pentagramId } = Route.useParams()
    const { handleAddNode } = usePentagramModalEventHandler()
    const errorToast = useThrottledErrorToast()
    const navigate = usePentagramNavigation()
    const title = t("modal.title.addNode")

    const handleClickClose = () => {
        navigate.pentagram(pentagramId)
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