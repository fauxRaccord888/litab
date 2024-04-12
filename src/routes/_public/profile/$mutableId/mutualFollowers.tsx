/* types */
import type { DBMiniProfile } from '$feature/Profile/types';
import type { GetUserByMutableIdQuery } from '$lib/graphql/__generated__/graphql';
/* hooks */
import { useQuery } from '@apollo/client';
import { useProfileNavigate, useRedirectOnError } from '$feature/navigate/hooks';
import { useTranslation } from 'react-i18next';
import { useCurrentUser } from '$feature/auth/hooks';
/* query */
import { getUserByMutableId_QUERY } from '$feature/Profile/graphql';
/* router */
import { createFileRoute } from '@tanstack/react-router';
/* utils */
import { NETWORK } from '$lib/constants';
import { calcFollowings, calcMutualFollowers } from '$feature/Profile/util';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
/* components */
import MiniProfileModal from '$feature/Profile/components/modal/MiniProfileModal';

export const Route = createFileRoute('/_public/profile/$mutableId/mutualFollowers')({
    component: FollowersModal
})

function FollowersModal() {
    const params = Route.useParams()
    const { data, error } = useQuery<GetUserByMutableIdQuery>(getUserByMutableId_QUERY, {
        variables: { 
            mutableId: params.mutableId, 
            pentagramLimit: NETWORK.readLimit,
            pentagramCursor: null,
            revisionLimit: NETWORK.readLimit,
            revisionCursor: null,
        }
    })
    const targetUser = getFirstNodeOfCollection(data?.usersCollection)
    useRedirectOnError(Boolean(
        (data && !targetUser) 
        || error
    ))

    const { currentUser } = useCurrentUser()
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
    const navigate = useProfileNavigate()
    const { t } = useTranslation()

    const title = t("portal.modal.title.mutualFollowers")
    const handleClickClose = () => {
        navigate.profileSelect(params.mutableId)
    }

    return (
        <MiniProfileModal
            title={title} 
            handleClickClose={handleClickClose}
            items={props.items}
        />
    )
}