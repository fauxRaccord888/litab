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
import { useAccountNavigate, useOeuvreNavigate, usePentagramNavigate, useProfileNavigate, useRedirectOnError } from "$feature/navigate/hooks";
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

type EventHandler = BaseEventHandler<ProfileLoadMorePayload> 
    & ProfileEventHandler 
    & PentagramEventHandler 
    & OeuvreEventHandler 

function Profile() {
    const params = Route.useParams()
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

    const profileNavigate = useProfileNavigate()
    const oeuvreNavigate = useOeuvreNavigate()
    const pentagramNavigate = usePentagramNavigate()
    const accountNavigate = useAccountNavigate()
    const handleFollow = useHandleFollow()
    useRedirectOnError(Boolean(
        (data && !item) 
        || error
    ))

    const handleLoadMore = useCallback((payload: {
        pentagramLimit: number, 
        revisionLimit: number
    }) => {
        fetchMore({
            variables: {
                ...payload,
                mutableId: item?.mutableId,
                revisionCursor: item?.pentagramRevisionsCollection?.pageInfo?.endCursor,
                pentagramCursor: item?.pentagramsCollection?.pageInfo?.endCursor
            }
        })
    }, [fetchMore, item?.mutableId, item?.pentagramRevisionsCollection?.pageInfo?.endCursor, item?.pentagramsCollection?.pageInfo?.endCursor])

    const onFollow = (id: string) => {
        handleFollow(
            id, 
            () => accountNavigate.accountMenuModal()
        )
    }

    const eventHandler: EventHandler = {
        handleLoadMore,
        follow: onFollow,
        profileSelectMenuModal: profileNavigate.profileSelectMenuModal,
        followersModal: profileNavigate.followersModal,
        followingsModal: profileNavigate.followingsModal,
        mutualFollowersModal: profileNavigate.mutualFollowersModal,
        pentagramMenuModal: (id: string) => pentagramNavigate.pentagramSelectModal(id),
        nodeSelectModal: (nodeId: string) => pentagramNavigate.nodeSelectModal(nodeId),
        revisionSelectModal: (revisionId: string) => pentagramNavigate.revisionSelectModal(revisionId),
        navigateToUpdate:(id: string) => pentagramNavigate.update(id),
        selectOeuvre: (oeuvre) => oeuvreNavigate.select(oeuvre.id),
    }

    if (!item) return null

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
