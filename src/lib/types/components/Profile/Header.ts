import type { SettingsLangOption } from '$lib/types/settings';
import type { DBTypes } from '$lib/types/supabaseDBTypes';

export type DBProfiles = DBTypes['profiles'];

type ShowFollowingDetailsActions = Record<keyof DBProfiles, () => void>

export interface IHeaderProfileProps {
    profile: DBProfiles
    mutualFollower: string[]
    action: {
        handleFollow?: () => void
        handleShowMore?: () => void
        handleShowMutualFollowing?: () => void
        followings?: Partial<ShowFollowingDetailsActions>
    }
    settings: {
        lang: keyof SettingsLangOption
    }
}