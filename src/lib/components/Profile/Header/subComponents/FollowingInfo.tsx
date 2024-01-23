/* types */
import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header"
/* constants */
import PROFILE from "$lib/constants/components/Profile"
/* utils */
import { objectKeys } from "$lib/utils/objectKeys"
/* styles */
import '$lib/style/profile/header/following.scss'

export default function FollowingInfo(props: IHeaderProfileProps) {
    const { profile, action, settings } = props
    const keys = objectKeys(PROFILE.FOLLOWING_INFO) // ['following', 'follower', 'posts']

    return (
        <div className="following-info-container">
            {keys.map((key) => {
                const showDetail = action?.followings?.[key]
                    ? action?.followings?.[key]
                    : () => {}
                const disabled = !(action?.followings?.[key]) || !(profile?.[key]?.length) // no action or no length
                
                return (
                    <div key={key} className="following-info" >
                        <span>{PROFILE.FOLLOWING_INFO[key]?.[settings.lang]}</span>
                        <button 
                            disabled={disabled}
                            className={`display-${key}`}
                            onClick={showDetail} 
                        >
                            <span><em>{profile[key]?.length}</em></span>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
