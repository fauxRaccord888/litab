/* types */
import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header"
/* constants */
import PROFILE from "$lib/constants/components/Profile"
/* styles */
import "$lib/style/profile/header/description.scss"

export default function DescriptionInfo(props: IHeaderProfileProps) {
    const { profile, settings } = props
    const totalMutualFollower = profile.mutualFollowing.length
    const mutualFollowers = profile.mutualFollowing
        .slice(0, PROFILE.DEFAULT_VALUES.mutualFollowShowCount)
        .map((follower) => <span key={follower}>{follower}</span>)

    const formattedMutualFollowers = PROFILE.MESSAGE_HELPER.mutualFollower(
        totalMutualFollower, mutualFollowers, settings.lang
    )

    return (
        <div className="description-info-container">
            <span className="nickname"><em>{profile.nickname}</em></span>
            <span className="description">{profile.description}</span>

            {profile.mutualFollowing && profile.mutualFollowing.length &&
                <span className="mutual-follower">
                    {formattedMutualFollowers}
                </span>
            }
        </div>
    )
}