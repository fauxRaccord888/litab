/* route */
import { FileRoute } from "@tanstack/react-router";
/* types */
import type { PropsWithStatus } from "$lib/types/components";
import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header";
/* fetch */
import { getProfileByMutableId_DB } from "$lib/database/profiles";
/* components */
import ProfileHeader from "$lib/components/Profile/Header";

export const Route = new FileRoute('/profile/$mutableId').createRoute({
    parseParams: (params) => ({
        mutableId: params.mutableId,
    }),
    loader: async ({ params }) => {
        const { data } = await getProfileByMutableId_DB({ mutableId: params.mutableId })
        if (data?.[0]) return data[0]
        else throw new Error('profile not found')
    },
    errorComponent: ({error}) => <ProfileComponent status="error" error={error}/>,
    pendingComponent: () => <ProfileComponent status="pending" />,
    component: Profile
})

function Profile() {
    const data  = Route.useLoaderData()
    const profileProps: IHeaderProfileProps = {
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
            followings: {
                follower: () => {},
                following: () => {}
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