/* hooks */
import { useTranslation } from "react-i18next"
/* types */
import type { DBProfiles, IHeaderProfileProps } from "$feature/Profile/types"
import type { FollowingsMiniProfileFragment, PostsMiniDataFragment } from "$lib/graphql/__generated__/graphql"
/* constants */
import PROFILE from "$feature/Profile/constants"
/* components */
import { Link } from '@tanstack/react-router';
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
    const { profile } = props

    const keys = PROFILE.FOLLOWING_INFO // ['posts', 'followings', 'followers']
    return (
        <div className="following-info-container">
            {keys.map((key) => {
                // TODO HARD CODED VALUE ( key === 'posts')
                const disabled = !(profile[key]) || key === 'posts'
                return (
                    <div key={key} className="following-info" >
                        <Link disabled={disabled} to={`${key}`}>
                            <span>{t(`header.count.${key}`)}</span>
                            <span><em>{calcCollectionLength(profile[key])}</em></span>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
