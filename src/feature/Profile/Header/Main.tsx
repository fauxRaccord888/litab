import type { IHeaderProfileProps } from "$feature/Profile/types"

import ProfileImage from "../components/ProfileImage";
import AccountInfo from "../components/AccountInfo";
import AccountInteraction from "../components/AccountInteraction";
import FollowingInfo from "../components/FollowingInfo";
import DescriptionInfo from "../components/DescriptionInfo";

export default function Main(props: IHeaderProfileProps) {
    return (
        <div className="profile-header-container">
            <div className="profile-image-outer-container">
                <ProfileImage {...props}/>
            </div>
            <div className="account-info-outer-container">
                <AccountInfo {...props}/>
                <AccountInteraction {...props}/>
            </div>
            <div className="profile-info-container">
                <FollowingInfo {...props}/>
                <DescriptionInfo {...props}/>
            </div>
        </div>
    )
}