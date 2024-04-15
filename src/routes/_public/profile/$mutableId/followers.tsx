/* types */
import type { DBMiniProfile } from '$feature/Profile/types';
import type { GetUserByMutableIdQuery } from '$lib/graphql/__generated__/graphql';
/* hooks */
import { useQuery } from '@apollo/client';
import { useProfileNavigate, useRedirectOnError } from '$feature/navigate/hooks';
import { useTranslation } from 'react-i18next';
/* query */
import { getUserByMutableId_QUERY } from '$feature/Profile/graphql';
/* router */
import { createFileRoute } from '@tanstack/react-router';
/* utils */
import { NETWORK } from '$lib/constants';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
/* components */
import MiniProfileModal from '$feature/Profile/components/modal/MiniProfileModal';

export const Route = createFileRoute('/_public/profile/$mutableId/followers')({
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
    const item = getFirstNodeOfCollection(data?.usersCollection)
    useRedirectOnError(Boolean(
        (data && !item) 
        || error
    ))

    if (!item?.followersCollection) return null

    return (
        <FollowersModalComponent 
            items={item.followersCollection.edges.map((edge) => edge.node.follower_id)}
        />
    )
}

function FollowersModalComponent(props: {
    items : DBMiniProfile[]
}) {
    const params = Route.useParams()
    const navigate = useProfileNavigate()
    const { t } = useTranslation()

    const title = t("portal.modal.title.followers")
    const handleClickClose = () => {
        navigate.profileSelect(params.mutableId)
    }

    return (
        <MiniProfileModal
            title={title} 
            items={props.items}
            eventHandler={{
                selectProfile: (profile) => navigate.profileSelect(profile.mutable_id)
            }}
            handleClickClose={handleClickClose}
        />
    )
}