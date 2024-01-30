import type { ProfileForeignTableKeys } from '$feature/Profile/types';

const FOLLOWING_INFO: ProfileForeignTableKeys[] = ['posts', 'followings', 'followers']

const DEFAULT_VALUES = {
    buttonColor: [128, 128, 128],
    mutualFollowerDisplayCount: 3
}

const PROFILE = {
    FOLLOWING_INFO,
    DEFAULT_VALUES
}

export default PROFILE