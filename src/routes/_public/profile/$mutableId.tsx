/* route */
import { Outlet, createFileRoute } from "@tanstack/react-router";
/* types */
import type { GetProfileByMutableIdQuery } from "$lib/graphql/__generated__/graphql";
import type { ProfileEventHandler } from "$feature/Profile/types";
import type { PentagramEventHandler } from "$feature/Pentagram/types";
/* hooks */
import { useQuery } from "@apollo/client";
import { usePentagramNavigate, useProfileNavigate } from "$feature/navigate/hooks";
import { useHandleFollow } from "$feature/Profile/hooks";
/* fetch */
import { getProfileByMutableId_QUERY } from "$feature/Profile/graphql";
/* utils */
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
/* components */
import ProfileSelectView from "$feature/Profile/components/ProfileSelctView";

export type ProfileSelectRoute = typeof Route

export const Route = createFileRoute('/_public/profile/$mutableId')({
    component: Profile
})

function Profile() {
    const params = Route.useParams()
    const context = Route.useRouteContext()
    const navigate = useProfileNavigate()
    const pentagramNavigate = usePentagramNavigate()
    const follow = useHandleFollow()

    const { data } = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const item = getFirstNodeOfCollection(data?.usersCollection)
    
    if (!item) return null

    const eventHandler: ProfileEventHandler & PentagramEventHandler = {
        follow,
        profileInteractionModal: navigate.profileSelectDetail,
        followersModal: navigate.followersDetail,
        followingsModal: navigate.followingsDetail,
        mutualFollowersModal: navigate.mutualFollowersDetail,
        pentagramInteractionModal: (id: string) => pentagramNavigate.pentagramSelectDetail(id, Route.fullPath, params),
        nodeDetailModal: (nodeId: string) => pentagramNavigate.nodeSelectDetail(nodeId, Route.fullPath, params),
        revisionDetailModal: (revisionId: string) => pentagramNavigate.revisionSelectDetail(revisionId, Route.fullPath, params)
    }

    return (
        <>
            <ProfileSelectView
                context={context}
                item={item}
                eventHandler={eventHandler}
            />
            <Outlet />
        </>
    )
}
