/* types */
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
import { formatProps } from '$lib/utils';
/* components */
import Modal from '$feature/portal/components/Modal';
import MiniProfileIterator from '$feature/Profile/MiniProfileIterator';

export const Route = createFileRoute('/profile/$mutableId/followers')({
    component: FollowersModal
})

function FollowersModal() {
    const params = Route.useParams()
    const { data } = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    
    if (!firstNode?.followersCollection) return null

    return (
        <FollowersModalComponent 
            items={firstNode.followersCollection.edges.map((edge) => formatProps(edge.node.follower_id))}
        />
    )
}

function FollowersModalComponent(props: ModalMiniProfileProps) {
    const params = Route.useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const title = t("modal.title.followers")
    const handleClickClose = () => {
        navigate({to: "/profile/$mutableId", params: params})
    }

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <MiniProfileIterator items={props.items}/>
        </Modal>
    )
}