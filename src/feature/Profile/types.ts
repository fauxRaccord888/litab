import type { DBAuthUser } from '$feature/auth/type';
import type { InfoCardOptions, InfoCardRenderConfigKey } from '$feature/template/components/InfoCardTemplate';
import type { ISlotRenderConfig } from '$feature/template/type';
import type { GetProfileByMutableIdQuery, MiniProfileFragment } from '$lib/graphql/__generated__/graphql';
import type { FirstNodeOfCollection } from '$lib/types/graphql';

export type DBProfiles = FirstNodeOfCollection<GetProfileByMutableIdQuery["usersCollection"]>
export type DBMiniProfile = MiniProfileFragment
export type ProfileForeignTableKeys = 'followings' | 'followers' | 'posts';

export type ProfileInfoCardRenderOptions = ISlotRenderConfig<InfoCardRenderConfigKey>
export type ProfileInfoCardOptions = InfoCardOptions & {
    displayFollow?: boolean
    displayInteraction?: boolean
}
export type ProfileEventHandler = {
    follow?: (id: string, user: DBAuthUser | null | undefined) => void
    selectProfile?: (mutableId: string) => void
    mutualFollowersModal?: (mutableId: string) => void
    followingsModal?: (mutableId: string) => void
    followersModal?: (mutableId: string) => void
    profileInteractionModal?: (mutableId: string) => void
}