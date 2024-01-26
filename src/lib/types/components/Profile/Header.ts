import { GetProfileByMutableIdQuery } from '$lib/graphql/__generated__/graphql';
import type { SettingsLangOption } from '$lib/types/settings';
import type { FirstNodeOfCollection } from '$lib/types/graphql';

export type DBProfiles = FirstNodeOfCollection<GetProfileByMutableIdQuery["usersCollection"]>
export type ProfileForeignTableKeys = 'followings' | 'followers' | 'posts';

type ShowFollowingDetailsActions = Record<ProfileForeignTableKeys, () => void>

export type IHeaderProfileProps<T=DBProfiles> = {
    profile: T,
    mutualFollower?: string[],
    action?: {
        handleClickProfile?: () => void
        handleFollow?: () => void
        handleShowMore?: () => void
        handleShowMutualFollowing?: () => void
        handleShowFollowingsInfo?: Partial<ShowFollowingDetailsActions>
    },
    settings: {
        lang: keyof SettingsLangOption
    }
}