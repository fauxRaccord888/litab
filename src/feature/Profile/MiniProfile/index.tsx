import type { DBProfiles } from "$feature/Profile/types";

import ProfileImage from "../components/ProfileImage";
import AccountInfo from "../components/AccountInfo";
import AccountInteraction from "../components/AccountInteraction";

import "./style/index.scss"

interface MiniProfileProps extends DBProfiles {
    id: string,
    mutable_id: string ,
}

export default function MiniProfile(props: MiniProfileProps) {
    return (
        <div className="mini-profile-container">
            <div className="profile-container">
                <ProfileImage mini {...props}/>
                <AccountInfo mini {...props}/>
            </div>
            <div className="interaction-container">
                <AccountInteraction mini {...props}/>
            </div>
        </div>
    )
}