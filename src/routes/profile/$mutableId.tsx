/* route */
import { FileRoute } from "@tanstack/react-router";
/* types */
import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header";
/* fetch */
import { getProfileByMutableId_DB } from '$lib/database/profiles';
/* components */
import ProfileHeader from "$lib/components/Profile/Header";
/* env */
const DATABASE_URL = import.meta.env.VITE_PUBLIC_DB_URL;
const PROFILE_PIC_BUCKET = import.meta.env.VITE_PUBLIC_PROFILE_PIC_BUCKET;

export const Route = new FileRoute('/profile/$mutableId').createRoute({
    parseParams: (params) => ({
        mutableId: params.mutableId,
    }),
    loader: ({ params: { mutableId } }) => getProfileByMutableId_DB({ mutableId }),
    component: Profile
})

// TODO profile fetch data를 Props로 변환
const dummpProfileProps: IHeaderProfileProps = {
    profile : {
        mutable_id: 'foo',
        nickname: 'bar',
        description: 'baz',
        id: 'foo',
        approved: false,
        preference: [1, 1, 1],

        img_src: `${DATABASE_URL}/${PROFILE_PIC_BUCKET}/foo/profile.jpg`,

        post: 1,
        follower: 2,
        following: 3,
        mutualFollowing: ['foo', 'bar', 'baz'],
    },
    settings: {
        lang: 'kr'
    },
    // TODO action 추가 hooks으로
    action: {
        handleFollow: () => {},
        handleShowMore: () => {},
        handleShowMutualFollowing: () => {}
    }
}

function Profile() {
    const { data } = Route.useLoaderData()
    return (
        <div className="profile-container">
            <ProfileHeader {...dummpProfileProps} />
        </div>
    )
}