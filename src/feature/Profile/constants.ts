import type { ProfileForeignTableKeys } from '$feature/Profile/types';

export const PROFILE = {
    FOLLOWING_INFO: ['posts', 'followings', 'followers'] as ProfileForeignTableKeys[],
    MUTUAL_FOLLOWER_DISPLAY_COUNT: 3
}