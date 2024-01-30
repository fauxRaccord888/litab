import { GetProfileByMutableIdQuery } from '$lib/graphql/__generated__/graphql';
import type { FirstNodeOfCollection } from '$lib/types/graphql';

export type DBProfiles = FirstNodeOfCollection<GetProfileByMutableIdQuery["usersCollection"]>
export type ProfileForeignTableKeys = 'followings' | 'followers' | 'posts';

export type IHeaderProfileProps<T=DBProfiles> = {
    id: string,
    profile: T,
    mutualFollowers?: string[],
    action?: {
        handleShowProfile?: (id: string) => void
        handleFollow?: (id: string) => void
        handleShowMore?: (id: string) => void
        handleShowMutualFollowing?: (id: string) => void
    }
}