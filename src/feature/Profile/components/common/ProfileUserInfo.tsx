/* types */
import type { MouseEvent } from 'react';
import type { DBProfiles } from "$feature/Profile/types"
/* styles */
import "./style/profileUserInfo.scss"

type ProfileUserInfoProps = {
    mutable_id: DBProfiles["mutable_id"]
    nickname: DBProfiles["nickname"]
    miniView?: boolean,
    handleShowProfile?: () => void
}

export default function ProfileUserInfo(props: ProfileUserInfoProps) {
    const { mutable_id, nickname, miniView, handleShowProfile } = props

    const onClickProfile = (e: MouseEvent) => {
        e.stopPropagation()
        if (handleShowProfile) handleShowProfile()
    }

    return (
        <div 
            className={[
                "profile-user-info-component",
                handleShowProfile ? "profile-user-info-component--pointer" : ""
            ].join(" ")}
            onClick={onClickProfile}
        >
            <span className="profile-user-info-component__mutable-id">
                {mutable_id}
            </span>
            {miniView &&
                <span className="profile-user-info-component__nickname">
                    {nickname}
                </span>
            }
        </div>
    )
}