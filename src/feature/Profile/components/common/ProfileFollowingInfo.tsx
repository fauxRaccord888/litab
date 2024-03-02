/* types */
import type { DBProfiles } from "$feature/Profile/types"
import type { MouseEvent } from "react";
/* hooks */
import { useTranslation } from "react-i18next"
/* utils */
import { calcCollectionLength } from "$lib/utils/graphql"
/* styles */
import "./style/profileFollowingInfo.scss"

type ProfileFollowingInfoProps = {
    followingsCollection: DBProfiles["followingsCollection"]
    followersCollection: DBProfiles["followersCollection"]

    handleShowFollowings?: (e: MouseEvent) => void
    handleShowFollowers?: (e: MouseEvent) => void
}

export default function ProfileFollowingInfo(props: ProfileFollowingInfoProps) {
    const { followingsCollection, followersCollection, handleShowFollowings, handleShowFollowers } = props
    const { t } = useTranslation()

    const handleOnClick = (
        e: MouseEvent, 
        func: ((e: MouseEvent) => void)| undefined
    ) => {
        if (func) func(e)
    }

    return (
        <div className="profile-following-info-component">
            <div className="profile-following-info-component__followings" >
                <button 
                    className="profile-following-info-component__count-button"
                    disabled={!followingsCollection?.edges.length} 
                    onClick={(e) => handleOnClick(e, handleShowFollowings)}
                >
                    <span>{t(`header.count.followings`)}</span>
                    <span>{calcCollectionLength(followingsCollection)}</span>
                </button>
            </div>

            <div className="profile-following-info-component__followers" >
                <button 
                    className="profile-following-info-component__count-button"
                    disabled={(!followersCollection?.edges.length)} 
                    onClick={(e) => handleOnClick(e, handleShowFollowers)}
                >
                    <span>{t(`header.count.followers`)}</span>
                    <span>{calcCollectionLength(followersCollection)}</span>
                </button>
            </div>
        </div>
    )
}
