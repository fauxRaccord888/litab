/* route */
import { Outlet, createFileRoute } from "@tanstack/react-router";
/* types */
import type { DBProfiles } from "$feature/Profile/types";
import type { FormatProps } from "$lib/types/components";
import type { GetProfileByMutableIdQuery } from "$lib/graphql/__generated__/graphql";
/* hooks */
import { useQuery } from "@apollo/client";
/* fetch */
import { getProfileByMutableId_QUERY } from "$feature/Profile/graphql";
/* utils */
import { getFirstNodeOfCollection } from '$lib/utils/graphql';
/* components */
import ProfileSelectView from "$feature/Profile/components/ProfileSelctView";

export const Route = createFileRoute('/profile/$mutableId')({
    component: Profile
})

function Profile() {
    const params = Route.useParams()
    const {data} = useQuery<GetProfileByMutableIdQuery>(getProfileByMutableId_QUERY, {variables: {mutableId: params.mutableId }})
    const firstNode = getFirstNodeOfCollection(data?.usersCollection)
    
    if (!firstNode) return null
    return <ProfileComponent item={firstNode}/>
}

// TODO Profile.index에 추가
function ProfileComponent(props: FormatProps<DBProfiles>) {
    return (
        <div className="profile-container">
            <ProfileSelectView 
                item={props.item}
            />

            <Outlet />
        </div>
    )
}