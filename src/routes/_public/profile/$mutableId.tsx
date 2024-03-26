/* route */
import { Outlet, createFileRoute } from "@tanstack/react-router";
/* types */
import type { SearchUsersQuery } from "$lib/graphql/__generated__/graphql";
import type { ProfileEventHandler } from "$feature/Profile/types";
import type { PentagramEventHandler } from "$feature/Pentagram/types";
import type { OeuvreEventHandler } from "$feature/Oeuvre/types";
/* hooks */
import { useQuery } from "@apollo/client";
import { useNavigate } from "@tanstack/react-router";
import { useOeuvreNavigate, usePentagramNavigate, useProfileNavigate } from "$feature/navigate/hooks";
import { useHandleFollow } from "$feature/Profile/hooks";
/* fetch */
import { searchUsers_QUERY } from "$feature/search/graphql";
/* utils */
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
    const context = Route.useRouteContext()
    const navigate = useNavigate()
    const profileNavigate = useProfileNavigate()
    const oeuvreNavigate = useOeuvreNavigate()
    const pentagramNavigate = usePentagramNavigate()
    const follow = useHandleFollow()

    const { data, error } = useQuery<SearchUsersQuery>(searchUsers_QUERY, {variables: {keyword: params.mutableId }})
    const item = getFirstNodeOfCollection(data?.usersCollection)
    
    if (!item) {
        if (error) {
            navigate({
                to: "/error"
            })
        }
        return null
    }

    const eventHandler: ProfileEventHandler & PentagramEventHandler & OeuvreEventHandler = {
        follow,
        profileSelectMenuModal: profileNavigate.profileSelectMenuModal,
        followersModal: profileNavigate.followersModal,
        followingsModal: profileNavigate.followingsModal,
        mutualFollowersModal: profileNavigate.mutualFollowersModal,
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
