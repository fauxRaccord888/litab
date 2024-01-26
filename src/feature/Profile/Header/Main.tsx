import type { IHeaderProfileProps } from "$feature/Profile/types"

import ProfileImage from "../common/components/ProfileImage";
import AccountInfo from "../common/components/AccountInfo";
import FollowingInfo from "../common/components/FollowingInfo";
import DescriptionInfo from "../common/components/DescriptionInfo";

export default function Main(props: IHeaderProfileProps) {
    return (
        <div className="profile-header-container">
            <div className="profile-image-outer-container">
                <ProfileImage {...props}/>
            </div>
            <AccountInfo {...props}/>
            <div className="profile-info-container">
                <FollowingInfo {...props}/>
                <DescriptionInfo {...props}/>
            </div>
        </div>
    )
}