/* types */
import type { GetProfileByMutableIdQuery } from '$lib/graphql/__generated__/graphql';
/* hooks */
import { useQuery } from '@apollo/client';
import { useNavigate } from "@tanstack/react-router"
import { useTranslation } from 'react-i18next';
/* query */
import { getProfileByMutableId_QUERY } from '$feature/Profile/graphql';
/* router */
import { createFileRoute } from '@tanstack/react-router';
/* utils */
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
/* components */
import Modal from '$feature/portal/components/Modal';

export const Route = createFileRoute('/profile/$mutableId/interaction')({
    component: InteractionModal
})

// TODO - Implement
function InteractionModal() {
    const params = Route.useParams()
    const { data } = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)

    return (
        <InteractionModalComponent>{firstNode && firstNode?.nickname}</InteractionModalComponent>
    )
}

function InteractionModalComponent() {
    const params = Route.useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const title = t("modal.title.interaction")
    const handleClickClose = () => {
        navigate({to: "/profile/$mutableId", params: params})
    }

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
        </Modal>
    )
}