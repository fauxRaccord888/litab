/* route */
import { Outlet, createFileRoute } from "@tanstack/react-router";
/* types */
import type { DBProfiles } from "$feature/Profile/types";
import type { RouterContext } from "$lib/types/components";
import type { GetProfileByMutableIdQuery } from "$lib/graphql/__generated__/graphql";
/* hooks */
import { useQuery } from "@apollo/client";
/* fetch */
import { getProfileByMutableId_QUERY } from "$feature/Profile/graphql";
/* utils */
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
/* components */
import ProfileSelectView from "$feature/Profile/components/ProfileSelctView";

export const Route = createFileRoute('/_public/profile/$mutableId')({
    component: Profile
})

function Profile() {
    const params = Route.useParams()
    const context = Route.useRouteContext()
    const { data } = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    
    if (!firstNode) return null
    return (
        <ProfileComponent 
            item={firstNode} 
            context={context}
        />
    )
}

function ProfileComponent(props: { item: DBProfiles, context: RouterContext} ) {
    return (
        <div className="profile-container">
            <ProfileSelectView
                context={props.context}
                item={props.item}
            />
            <Outlet />
        </div>
    )
}