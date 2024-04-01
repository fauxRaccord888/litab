/* route */
import { Outlet, createFileRoute } from "@tanstack/react-router";
/* types */
import type { GetUserByMutableIdQuery } from "$lib/graphql/__generated__/graphql";
import type { ProfileEventHandler, ProfileLoadMorePayload } from "$feature/Profile/types";
import type { PentagramEventHandler } from "$feature/Pentagram/types";
import type { OeuvreEventHandler } from "$feature/Oeuvre/types";
import type { BaseEventHandler } from "$lib/types/components";
/* hooks */
import { useCallback } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "@tanstack/react-router";
import { useOeuvreNavigate, usePentagramNavigate, useProfileNavigate } from "$feature/navigate/hooks";
import { useHandleFollow } from "$feature/Profile/hooks";
/* fetch */
import { getUserByMutableId_QUERY } from "$feature/Profile/graphql";
/* utils */
import { NETWORK } from "$lib/constants";
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
/* components */
import ProfileSelectView from "$feature/Profile/components/ProfileSelctView";

export const Route = createFileRoute('/_public/profile/$mutableId')({
    component: Profile,
    beforeLoad: ({params}) => {
        return {
            getTitle: () => `@${params.mutableId}`
        }
    },
})

function Profile() {
    const params = Route.useParams()
    const navigate = useNavigate()
    const profileNavigate = useProfileNavigate()
    const oeuvreNavigate = useOeuvreNavigate()
    const pentagramNavigate = usePentagramNavigate()
    const follow = useHandleFollow()

    const { data, error, fetchMore } = useQuery<GetUserByMutableIdQuery>(getUserByMutableId_QUERY, {
        variables: { 
            mutableId: params.mutableId, 
            pentagramLimit: NETWORK.readLimit,
            pentagramCursor: null,
            revisionLimit: NETWORK.readLimit,
            revisionCursor: null,
        }
    })
    const item = getFirstNodeOfCollection(data?.usersCollection)

    const handleLoadMore = useCallback((payload: {
        pentagramLimit: number, 
        revisionLimit: number
    }) => {
        fetchMore({
            variables: {
                ...payload,
                mutableId: item?.mutable_id,
                revisionCursor: item?.pentagram_revisionsCollection?.pageInfo?.endCursor,
                pentagramCursor: item?.pentagramsCollection?.pageInfo?.endCursor
            }
        })
    }, [fetchMore, item?.mutable_id, item?.pentagram_revisionsCollection?.pageInfo?.endCursor, item?.pentagramsCollection?.pageInfo?.endCursor])

    const eventHandler: BaseEventHandler<ProfileLoadMorePayload> & ProfileEventHandler & PentagramEventHandler & OeuvreEventHandler = {
        follow,
        handleLoadMore,
        profileSelectMenuModal: profileNavigate.profileSelectMenuModal,
        followersModal: profileNavigate.followersModal,
        followingsModal: profileNavigate.followingsModal,
        mutualFollowersModal: profileNavigate.mutualFollowersModal,
        pentagramMenuModal: (id: string) => pentagramNavigate.pentagramSelectModal(id),
        nodeSelectModal: (nodeId: string) => pentagramNavigate.nodeSelectModal(nodeId),
        revisionSelectModal: (revisionId: string) => pentagramNavigate.revisionSelectModal(revisionId),
        selectOeuvre: (oeuvreId: string) => oeuvreNavigate.select(oeuvreId),
    }

    if (!item) {
        if (error) {
            navigate({
                to: "/error"
            })
        }
        return null
    }

    return (
        <>
            <ProfileSelectView
                item={item}
                eventHandler={eventHandler}
            />
            <Outlet />
        </>
    )
}
