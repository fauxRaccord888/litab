import type { GetProfileByMutableIdQuery, MiniProfileFragment } from '$lib/graphql/__generated__/graphql';
import type { FirstNodeOfCollection } from '$lib/types/graphql';

export type DBProfiles = FirstNodeOfCollection<GetProfileByMutableIdQuery["usersCollection"]>
export type ProfileForeignTableKeys = 'followings' | 'followers' | 'posts';

export type ModalMiniProfileProps = {
    profiles: MiniProfileFragment[]
}