import type { FormatProps } from "$lib/types/components";
import type { GetProfileByMutableIdQuery } from '$lib/graphql/__generated__/graphql';
import type { FirstNodeOfCollection } from '$lib/types/graphql';

export type DBProfiles = FirstNodeOfCollection<GetProfileByMutableIdQuery["usersCollection"]>
export type ProfileForeignTableKeys = 'followings' | 'followers' | 'posts';
export type ModalMiniProfileProps = {
    items: FormatProps<DBProfiles>[]
}