/* types */
import type { PropsWithStatus } from '$lib/types/components';
import type { ModalMiniProfileProps } from '$feature/Profile/types';
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
import ModalContainer from '$feature/Modal/components/ModalContainer';
import MiniProfileIterator from '$feature/Profile/MiniProfileIterator';

export const Route = createFileRoute('/profile/$mutableId/followers')({
    component: FollowersModal
})

function FollowersModal() {
    const params = Route.useParams()
    const { data, error, loading } = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    
    if (loading) return <FollowersModalComponent status="pending" />
    if (error || !firstNode?.followers) return <FollowersModalComponent status="error" error={error} />

    return (
        <FollowersModalComponent 
            status="success"
            edges={firstNode.followers.edges}
        />
    )
}

function FollowersModalComponent(props: PropsWithStatus<ModalMiniProfileProps>) {
    const params = Route.useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const title = t("modal.title.followers")
    const handleClickClose = () => {
        navigate({to: "/profile/$mutableId", params: params})
    }

    return (
        <ModalContainer title={title} handleClickClose={handleClickClose}>
            <MiniProfileIterator {...props}/>
        </ModalContainer>
    )
}