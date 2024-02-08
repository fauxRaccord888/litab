/* types */
import type { PropsWithStatus } from '$lib/types/components';
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
    const { data, error, loading } = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    console.log(firstNode)
    
    if (loading) return <InteractionModalComponent status="pending" />
    if (error) return <InteractionModalComponent status="error" error={error} />

    return (
        <InteractionModalComponent status="pending">
        </InteractionModalComponent>
    )
}

function InteractionModalComponent(props: PropsWithStatus<null>) {
    const params = Route.useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const title = t("modal.title.interaction")
    const handleClickClose = () => {
        navigate({to: "/profile/$mutableId", params: params})
    }

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            {props.status}
        </Modal>
    )
}