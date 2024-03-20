/* route */
import { Outlet, createFileRoute } from "@tanstack/react-router";
/* types */
import type { GetProfileByMutableIdQuery } from "$lib/graphql/__generated__/graphql";
import type { ProfileEventHandler } from "$feature/Profile/types";
import type { PentagramEventHandler } from "$feature/Pentagram/types";
import type { OeuvreEventHandler } from "$feature/Oeuvre/types";
/* hooks */
import { useQuery } from "@apollo/client";
import { useOeuvreNavigate, usePentagramNavigate, useProfileNavigate } from "$feature/navigate/hooks";
import { useHandleFollow } from "$feature/Profile/hooks";
/* fetch */
import { getProfileByMutableId_QUERY } from "$feature/Profile/graphql";
/* utils */
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
import { getProcessedContext } from '$feature/navigate/utils';
/* components */
import ProfileSelectView from "$feature/Profile/components/ProfileSelctView";

export const Route = createFileRoute('/_public/profile/$mutableId')({
    component: Profile
})

function Profile() {
    const params = Route.useParams()
    const unprocessedContext = Route.useRouteContext()
    const context = getProcessedContext(unprocessedContext)
    const navigate = useProfileNavigate()
    const oeuvreNavigate = useOeuvreNavigate()
    const pentagramNavigate = usePentagramNavigate()
    const follow = useHandleFollow()

    const { data } = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const item = getFirstNodeOfCollection(data?.usersCollection)
    
    if (!item) return null

    const eventHandler: ProfileEventHandler & PentagramEventHandler & OeuvreEventHandler = {
        follow,
        profileSelectMenuModal: navigate.profileSelectMenuModal,
        followersModal: navigate.followersModal,
        followingsModal: navigate.followingsModal,
        mutualFollowersModal: navigate.mutualFollowersModal,
        pentagramMenuModal: (id: string) => pentagramNavigate.pentagramSelectModal(id),
        nodeSelectModal: (nodeId: string) => pentagramNavigate.nodeSelectModal(nodeId),
        revisionSelectModal: (revisionId: string) => pentagramNavigate.revisionSelectModal(revisionId),
        selectOeuvre: (oeuvreId: string) => oeuvreNavigate.select(oeuvreId),
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
