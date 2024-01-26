/* types */
import type { DBProfiles, IHeaderProfileProps } from "$feature/Profile/types"
import type { FollowingsMiniProfileFragment, PostsMiniDataFragment } from "$lib/graphql/__generated__/graphql"
/* constants */
import PROFILE from "$feature/Profile/common/constants"
/* utils */
import { objectKeys } from "$lib/utils/objectKeys"
import { calcCollectionLength } from "$lib/utils/graphql"
/* styles */
import "./style/following.scss"

interface FollowingInfoProps extends DBProfiles {
    followings?: FollowingsMiniProfileFragment | null,
    followers?: FollowingsMiniProfileFragment | null,
    posts?: PostsMiniDataFragment | null
}

export default function FollowingInfo(props: IHeaderProfileProps<FollowingInfoProps>) {
    const { profile, action, settings } = props
    const keys = objectKeys(PROFILE.FOLLOWING_INFO) // ['followings', 'followers', 'posts']
    return (
        <div className="following-info-container">
            {keys.map((key) => {
                const showDetail = action?.handleShowFollowingsInfo?.[key]
                const disabled = !(action?.handleShowFollowingsInfo?.[key]) || !(profile?.[key]) 

                return (
                    <div key={key} className="following-info" >
                        <span>{PROFILE.FOLLOWING_INFO[key]?.[settings.lang]}</span>
                        <button 
                            className={`${disabled ? '' : 'pointer'}`}
                            disabled={disabled}
                            onClick={showDetail}
                        >
                            <span><em>{calcCollectionLength(profile[key])}</em></span>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
