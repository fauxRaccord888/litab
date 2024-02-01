/* route */
import { Outlet, createFileRoute } from "@tanstack/react-router";
/* types */
import type { PropsWithStatus } from "$lib/types/components";
import type { DBProfiles } from "$feature/Profile/types";
import type { GetProfileByMutableIdQuery } from "$lib/graphql/__generated__/graphql";
/* hooks */
import { useQuery } from "@apollo/client";
/* fetch */
import { getProfileByMutableId_QUERY } from "$feature/Profile/graphql";
/* utils */
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
/* components */
import ProfileHeader from "$feature/Profile/Header";

export const Route = createFileRoute('/profile/$mutableId')({
    component: Profile
})

function Profile() {
    const params = Route.useParams()
    const {data, error, loading} = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    
    if (loading) return <ProfileComponent status="pending" />
    if (error || !firstNode) return <ProfileComponent status="error" error={error} />
    return <ProfileComponent status="success" {...firstNode}/>
}

// TODO Profile.index에 추가
function ProfileComponent(props: PropsWithStatus<DBProfiles>) {
    return (
        <div className="profile-container">
            <ProfileHeader {...props} />
            <Outlet />
        </div>
    )
}