import type { InfoCardOptions, InfoCardRenderConfigKey } from '$feature/template/components/InfoCardTemplate';
import type { ISlotRenderConfig } from '$feature/template/type';
import type { MiniProfileInfoFragment, SearchUsersQuery } from '$lib/graphql/__generated__/graphql';
import type { FirstNodeOfCollection } from '$lib/types/graphql';

export type DBProfiles = FirstNodeOfCollection<SearchUsersQuery["usersCollection"]>
export type DBMiniProfile = MiniProfileInfoFragment
export type ProfileForeignTableKeys = 'followings' | 'followers' | 'posts';

export type ProfileInfoCardRenderOptions = ISlotRenderConfig<InfoCardRenderConfigKey>
export type ProfileInfoCardOptions = InfoCardOptions & {
    displayFollow?: boolean
    displayInteraction?: boolean
}
export type ProfileEventHandler = {
    follow?: (id: string) => Promise<void>
    selectProfile?: (mutableId: string) => void
    mutualFollowersModal?: (mutableId: string) => void
    followingsModal?: (mutableId: string) => void
    followersModal?: (mutableId: string) => void
    profileSelectMenuModal?: (mutableId: string) => void
}