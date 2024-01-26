import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header"

import ProfileImage from "../common/ProfileImage";
import AccountInfo from "../common/AccountInfo";
import FollowingInfo from "../common/FollowingInfo";
import DescriptionInfo from "../common/DescriptionInfo";

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