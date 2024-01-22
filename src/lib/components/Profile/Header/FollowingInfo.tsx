/* types */
import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header"
/* constants */
import PROFILE from "$lib/constants/components/Profile"
/* utils */
import { objectKeys } from "$lib/utils/objectKeys"
/* styles */
import '$lib/style/profile/header/following.scss'

export default function FollowingInfo(props: IHeaderProfileProps) {
    const { profile, settings } = props
    const keys = objectKeys(PROFILE.FOLLOWING_INFO) // ['following', 'follower', 'posts']

    return (
        <div className="following-info-container">
            {keys.map((key) => (
                <div className="following-info" key={key}>
                    <span>
                        {PROFILE.FOLLOWING_INFO[key]?.[settings.lang]}
                    </span>
                    <span>
                        <em>{profile[key]}</em>
                    </span>
                </div>
            ))}
        </div>
    )
}
