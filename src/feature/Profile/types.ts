import type { GetProfileByMutableIdQuery } from '$lib/graphql/__generated__/graphql';
import type { FirstNodeOfCollection } from '$lib/types/graphql';
import type { FormatProps } from '$lib/types/components';

export type DBProfiles = FormatProps<FirstNodeOfCollection<GetProfileByMutableIdQuery["usersCollection"]>>
export type ProfileForeignTableKeys = 'followings' | 'followers' | 'posts';
export type ModalMiniProfileProps = {
    items: DBProfiles[]
}