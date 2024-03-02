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
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { formatProps } from '$lib/utils';
/* components */
import MiniProfileModal from '$feature/Profile/components/modal/MiniProfileModal';

export const Route = createFileRoute('/profile/$mutableId/followings')({
    component: FollowersModal
})

function FollowersModal() {
    const params = Route.useParams()
    const { data } = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    
    if (!firstNode?.followingsCollection) return null

    return (
        <FollowingsModalComponent 
            items={firstNode.followingsCollection.edges.map((edge) => formatProps(edge.node.following_id))}
        />
    )
}

function FollowingsModalComponent(props: {
    items : FormatProps<DBMiniProfile>[]
}) {
    const params = Route.useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const title = t("modal.title.followings")
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