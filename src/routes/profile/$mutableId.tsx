/* route */
import { createFileRoute } from "@tanstack/react-router";
/* types */
import type { PropsWithStatus } from "$lib/types/components";
import type { DBProfiles, IHeaderProfileProps } from "$lib/types/components/Profile/Header";
import type { GetProfileByMutableIdQuery } from "$lib/graphql/__generated__/graphql";
/* fetch */
import { getProfileByMutableId_QUERY } from "$lib/graphql/Profile";
/* components */
import ProfileHeader from "$lib/components/Profile/Header";

export const Route = createFileRoute('/profile/$mutableId')({
    parseParams: (params) => ({
        mutableId: params.mutableId,
    }),
    loader: async ({ context, params }) => {
        const queryOption = { query: getProfileByMutableId_QUERY, variables: { mutableId: params.mutableId } }
        const { data } = await context.apolloClient.query<GetProfileByMutableIdQuery>(queryOption)

        const firstNode = data.usersCollection?.edges[0]?.node
        if (firstNode !== undefined) return firstNode

        else throw new Error('profile not found')
    },
    errorComponent: ({ error }) => <ProfileComponent status="error" error={error}/>,
    pendingComponent: () => <ProfileComponent status="pending" />,
    component: Profile
})

function Profile() {
    const data  = Route.useLoaderData()
    const profileProps: IHeaderProfileProps<DBProfiles> = {
        profile: data,
        mutualFollower: ['foo', 'bar', 'baz'],
        settings: {
            lang: 'kr'
        },
        // TODO action 추가 hooks으로
        action: {
            handleFollow: () => {},
            handleShowMore: () => {},
            handleShowMutualFollowing: () => {},
            handleShowFollowingsInfo: {
                followers: () => {},
                followings: () => {}
            }
        }
    }
    return <ProfileComponent status="success" {...profileProps}/>
}

// TODO Profile.index에 추가
function ProfileComponent(props: PropsWithStatus<IHeaderProfileProps>) {
    return (
        <div className="profile-container">
            <ProfileHeader {...props} />
        </div>
    )
}