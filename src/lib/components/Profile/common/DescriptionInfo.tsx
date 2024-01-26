/* types */
import type { DBProfiles, IHeaderProfileProps } from "$lib/types/components/Profile/Header"
/* constants */
import PROFILE from "$lib/constants/components/Profile"
/* styles */
import "$lib/style/profile/header/description.scss"

interface DescriptionInfoProps extends DBProfiles {
    id: string,
    nickname?: string | null,
    description?: string | null
}

export default function DescriptionInfo(props: IHeaderProfileProps<DescriptionInfoProps>) {
    const { profile, action, mutualFollower, settings } = props
    const totalMutualFollower = mutualFollower?.length ?? 0
    const mutualFollowersElements = mutualFollower?.length
        ? mutualFollower
            .slice(0, PROFILE.DEFAULT_VALUES.mutualFollowShowCount)
            .map((friend) => <span key={friend}>{friend}</span>)
        : []

    const mutualFollowersComponent = PROFILE.MESSAGE_HELPER.mutualFollower(
        totalMutualFollower, mutualFollowersElements, settings.lang
    )

    return (
        <div className="description-info-container">
            {profile?.nickname &&
                <span className="nickname"><em>{profile?.nickname}</em></span>
            }
            {profile?.description &&
                <span className="description">{profile?.description}</span>
            }
            {mutualFollower && !!mutualFollower?.length && action?.handleShowMutualFollowing &&
                <span className="mutual-follower">
                    <button onClick={action.handleShowMutualFollowing}>
                        {mutualFollowersComponent}
                    </button>
                </span>
            }
        </div>
    )
}