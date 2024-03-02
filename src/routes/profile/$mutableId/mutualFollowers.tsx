/* types */
import type { FormatProps } from '$lib/types/components';
import type { DBMiniProfile } from '$feature/Profile/types';
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
import { formatProps } from '$lib/utils';
/* components */
import MiniProfileModal from '$feature/Profile/components/modal/MiniProfileModal';

export const Route = createFileRoute('/profile/$mutableId/mutualFollowers')({
    component: FollowersModal
})

function FollowersModal() {
    const params = Route.useParams()
    const { data } = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    const mutualFollowers = useMutualFollowers(firstNode?.id, firstNode?.followersCollection)
    
    if (!mutualFollowers) return null

    return (
        <MutualFollowingModalComponent 
            items={mutualFollowers.map((edge) => formatProps(edge.node.follower_id))}
        />
    )
}

function MutualFollowingModalComponent(props: {
    items : FormatProps<DBMiniProfile>[]
}) {
    const params = Route.useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const title = t("modal.title.mutualFollowers")
    const handleClickClose = () => {
        navigate({to: "/profile/$mutableId", params: params})
    }

    return (
        <MiniProfileModal
            title={title} 
            handleClickClose={handleClickClose}
            items={props.items}
        />
    )
}