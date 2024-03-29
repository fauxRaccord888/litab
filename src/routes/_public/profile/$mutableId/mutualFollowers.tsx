/* types */
import type { DBMiniProfile } from '$feature/Profile/types';
import type { SearchUsersQuery } from '$lib/graphql/__generated__/graphql';
/* hooks */
import { useQuery } from '@apollo/client';
import { useProfileNavigate } from '$feature/navigate/hooks';
import { useTranslation } from 'react-i18next';
/* query */
import { searchUsers_QUERY } from '$feature/search/graphql';
/* router */
import { createFileRoute } from '@tanstack/react-router';
/* utils */
import { calcFollowings, calcMutualFollowers } from '$feature/Profile/util';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { getCurrentUserFromObservable } from '$feature/auth/utils';
/* components */
import MiniProfileModal from '$feature/Profile/components/modal/MiniProfileModal';

export const Route = createFileRoute('/_public/profile/$mutableId/mutualFollowers')({
    component: FollowersModal
})

function FollowersModal() {
    const params = Route.useParams()
    const context = Route.useRouteContext()
    const { data } = useQuery<SearchUsersQuery>(searchUsers_QUERY, {variables: {keyword: params.mutableId }})
    const targetUser = getFirstNodeOfCollection(data?.usersCollection)
    const currentUser = getCurrentUserFromObservable(context.userObservable)

    const followings = calcFollowings(currentUser)
    const mutualFollowers = calcMutualFollowers(currentUser, targetUser, followings)
    
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