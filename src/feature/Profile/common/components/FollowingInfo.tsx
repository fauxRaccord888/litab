/* hooks */
import { useTranslation } from "react-i18next"
/* types */
import type { DBProfiles, IHeaderProfileProps } from "$feature/Profile/types"
import type { FollowingsMiniProfileFragment, PostsMiniDataFragment } from "$lib/graphql/__generated__/graphql"
/* constants */
import PROFILE from "$feature/Profile/common/constants"
/* utils */
import { calcCollectionLength } from "$lib/utils/graphql"
/* styles */
import "./style/following.scss"

interface FollowingInfoProps extends DBProfiles {
    followings?: FollowingsMiniProfileFragment | null,
    followers?: FollowingsMiniProfileFragment | null,
    posts?: PostsMiniDataFragment | null
}

export default function FollowingInfo(props: IHeaderProfileProps<FollowingInfoProps>) {
    const { t } = useTranslation()
    const { profile, action } = props

    const keys = PROFILE.FOLLOWING_INFO // ['followings', 'followers', 'posts']
    return (
        <div className="following-info-container">
            {keys.map((key) => {
                const showDetail = action?.handleShowFollowingsInfo?.[key]
                const disabled = !(action?.handleShowFollowingsInfo?.[key]) || !(profile?.[key]) 

                return (
                    <div key={key} className="following-info" >
                        <span>{t(`header.count.${key}`)}</span>
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
