/* types */
import type { PropsWithStatus } from '$lib/types/components';
import type { ModalMiniProfileProps } from '$feature/Profile/types';
import type { GetProfileByMutableIdQuery } from '$lib/graphql/__generated__/graphql';
/* hooks */
import { useQuery } from '@apollo/client';
import { useNavigate } from "@tanstack/react-router"
import { useTranslation } from 'react-i18next';
import { useMutualFollowers } from '$feature/Profile/hooks';
/* query */
import { getProfileByMutableId_QUERY } from '$feature/Profile/graphql';
/* router */
import { createFileRoute } from '@tanstack/react-router';
/* utils */
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
/* components */
import ModalContainer from '$feature/Modal/components/ModalContainer';
import MiniProfileIterator from '$feature/Profile/MiniProfileIterator';

export const Route = createFileRoute('/profile/$mutableId/mutualFollowers')({
    component: FollowersModal
})

function FollowersModal() {
    const params = Route.useParams()
    const { data, error, loading } = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    const { mutualFollowers } = useMutualFollowers(firstNode?.id, firstNode?.followings)
    
    if (loading) return <MutualFollowingModalComponent status="pending" />    
    if (error || !firstNode || !mutualFollowers) return <MutualFollowingModalComponent status="error" error={error} />
    
    return (
        <MutualFollowingModalComponent 
            status="success"
            edges={mutualFollowers}
        />
    )
}

function MutualFollowingModalComponent(props: PropsWithStatus<ModalMiniProfileProps>) {
    const params = Route.useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const title = t("modal.title.mutualFollowers")
    const handleClickClose = () => {
        navigate({to: "/profile/$mutableId", params: params})
    }

    return (
        <ModalContainer title={title} handleClickClose={handleClickClose}>
            <MiniProfileIterator {...props}/>
        </ModalContainer>
    )
}