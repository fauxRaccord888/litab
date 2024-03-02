/* types */
import type { MouseEvent } from 'react';
import type { DBProfiles } from "$feature/Profile/types"
/* styles */
import "./style/profileInfo.scss"

type ProfileUserInfoProps = {
    mutable_id: DBProfiles["mutable_id"]
    nickname: DBProfiles["nickname"]
    miniView?: boolean,
    handleShowProfile?: (e: MouseEvent) => void
}

export default function ProfileUserInfo(props: ProfileUserInfoProps) {
    const { mutable_id, nickname, miniView, handleShowProfile } = props

    const handleClickProfile = (e: MouseEvent) => {
        if (handleShowProfile) handleShowProfile(e)
    }

    return (
        <div 
            className="profile-info-component"
            onClick={(e) => handleClickProfile(e)}
        >
            <span className="profile-info-component__mutable-id">
                {mutable_id}
            </span>
            {miniView &&
                <span className="profile-info-component__nickname">
                    {nickname}
                </span>
            }
        </div>
    )
}