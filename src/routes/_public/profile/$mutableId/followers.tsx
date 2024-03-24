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
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
/* components */
import MiniProfileModal from '$feature/Profile/components/modal/MiniProfileModal';

export const Route = createFileRoute('/_public/profile/$mutableId/followers')({
    component: FollowersModal
})

function FollowersModal() {
    const params = Route.useParams()
    const { data } = useQuery<SearchUsersQuery>(searchUsers_QUERY, {variables: {keyword: params.mutableId }})
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    
    if (!firstNode?.followersCollection) return null

    return (
        <FollowersModalComponent 
            items={firstNode.followersCollection.edges.map((edge) => edge.node.follower_id)}
        />
    )
}

function FollowersModalComponent(props: {
    items : DBMiniProfile[]
}) {
    const params = Route.useParams()
    const context = Route.useRouteContext()
    const navigate = useProfileNavigate()
    const { t } = useTranslation()

    const title = t("modal.title.followers")
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