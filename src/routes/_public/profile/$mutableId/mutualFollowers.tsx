/* types */
import type { DBMiniProfile } from '$feature/Profile/types';
import type { GetProfileByMutableIdQuery } from '$lib/graphql/__generated__/graphql';
/* hooks */
import { useQuery } from '@apollo/client';
import { useProfileNavigate } from '$feature/navigate/hooks';
import { useTranslation } from 'react-i18next';
/* query */
import { getProfileByMutableId_QUERY } from '$feature/Profile/graphql';
/* router */
import { createFileRoute } from '@tanstack/react-router';
/* utils */
import { calcFollowings, calcMutualFollowers } from '$feature/Profile/util';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
/* components */
import MiniProfileModal from '$feature/Profile/components/modal/MiniProfileModal';

export const Route = createFileRoute('/_public/profile/$mutableId/mutualFollowers')({
    component: FollowersModal
})

function FollowersModal() {
    const params = Route.useParams()
    const context = Route.useRouteContext()
    const { data } = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const targetUser = getFirstNodeOfCollection(data?.usersCollection)

    const followings = calcFollowings(context.currentUser)
    const mutualFollowers = calcMutualFollowers(context.currentUser, targetUser, followings)
    
    if (!mutualFollowers) return null

    return (
        <MutualFollowingModalComponent 
            items={mutualFollowers.map((node) => node.follower_id)}
        />
    )
}

function MutualFollowingModalComponent(props: {
    items : DBMiniProfile[]
}) {
    const params = Route.useParams()
    const context = Route.useRouteContext()
    const navigate = useProfileNavigate()
    const { t } = useTranslation()

    const title = t("modal.title.mutualFollowers")
    const handleClickClose = () => {
        navigate.profileSelect(params.mutableId)
    }

    return (
        <MiniProfileModal
            title={title} 
            handleClickClose={handleClickClose}
            items={props.items}
            context={context}
        />
    )
}