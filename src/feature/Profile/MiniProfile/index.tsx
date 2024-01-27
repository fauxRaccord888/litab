import type { DBProfiles, IHeaderProfileProps } from "$feature/Profile/types";

import ProfileImage from "../common/components/ProfileImage";
import AccountInfo from "../common/components/AccountInfo";
import AccountInteraction from "../common/components/AccountInteraction";

import "./style/index.scss"

interface MiniProfileProps extends DBProfiles {
    id: string,
    mutable_id?: string | null,
}

export default function MiniProfile(props: IHeaderProfileProps<MiniProfileProps>) {
    return (
        <div className="mini-profile-container">
            <div className="profile-container">
                <ProfileImage {...props}/>
                <AccountInfo {...props}/>
            </div>
            <div className="interaction-container">
                <AccountInteraction {...props}/>
            </div>
        </div>
    )
}