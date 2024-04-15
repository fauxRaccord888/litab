/* types */
import type { MouseEvent } from 'react';
import type { DBProfiles, ProfileEventHandler, ProfileInfoCardOptions } from "../../types"
/* styles */
import "./style/profileUserInfo.scss"

type ProfileUserInfoProps = {
    item: DBProfiles,
    mutable_id: DBProfiles["mutable_id"]
    nickname: DBProfiles["nickname"]
    eventHandler: ProfileEventHandler
    options: ProfileInfoCardOptions
}

export default function ProfileUserInfo(props: ProfileUserInfoProps) {
    const { item, mutable_id, nickname, eventHandler, options } = props

    const onClickProfile = (e: MouseEvent) => {
        e.stopPropagation()
        if (eventHandler.selectProfile) eventHandler.selectProfile(item)
    }

    return (
        <div 
            className={[
                "profile-user-info-component",
                eventHandler.selectProfile ? "profile-user-info-component--pointer" : ""
            ].join(" ")}
            onClick={onClickProfile}
        >
            <span className="profile-user-info-component__mutable-id">
                {mutable_id}
            </span>
            {options.miniView &&
                <span className="profile-user-info-component__nickname">
                    {nickname}
                </span>
            }
        </div>
    )
}