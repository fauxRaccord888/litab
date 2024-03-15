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
    mutable_id: DBProfiles["mutable_id"]
    followingsCollection: DBProfiles["followingsCollection"]
    followersCollection: DBProfiles["followersCollection"]

    handleShowFollowings?: (mutableId: string) => void
    handleShowFollowers?: (mutableId: string) => void
}

export default function ProfileFollowingInfo(props: ProfileFollowingInfoProps) {
    const { mutable_id, followingsCollection, followersCollection, handleShowFollowings, handleShowFollowers } = props
    const { t } = useTranslation()

    const onClickCountButton = (
        e: MouseEvent, 
        func: ((mutableId: string) => void)| undefined
    ) => {
        e.stopPropagation()
        if (func) func(mutable_id)
    }

    return (
        <div className="profile-following-info-component">
            <div className="profile-following-info-component__followings" >
                <button 
                    className="profile-following-info-component__count-button"
                    disabled={!followingsCollection?.edges.length} 
                    onClick={(e) => onClickCountButton(e, handleShowFollowings)}
                >
                    <span>{t(`header.count.followings`)}</span>
                    <span>{calcCollectionLength(followingsCollection)}</span>
                </button>
            </div>

            <div className="profile-following-info-component__followers" >
                <button 
                    className="profile-following-info-component__count-button"
                    disabled={(!followersCollection?.edges.length)} 
                    onClick={(e) => onClickCountButton(e, handleShowFollowers)}
                >
                    <span>{t(`header.count.followers`)}</span>
                    <span>{calcCollectionLength(followersCollection)}</span>
                </button>
            </div>
        </div>
    )
}
