/* types */
import type { FormatProps } from '$lib/types/components';
import type { DBMiniProfile } from '$feature/Profile/types';
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
import { calcFollowings, calcMutualFollowers } from '$feature/Profile/util';
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { formatProps } from '$lib/utils';
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
            items={mutualFollowers.map((node) => formatProps(node.follower_id))}
        />
    )
}

function MutualFollowingModalComponent(props: {
    items : FormatProps<DBMiniProfile>[]
}) {
    const params = Route.useParams()
    const context = Route.useRouteContext()
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
            context={context}
        />
    )
}