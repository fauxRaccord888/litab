import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header";

import ProfileImage from "./ProfileImage";
import AccountInfo from "./AccountInfo";
import FollowingInfo from "./FollowingInfo";
import DescriptionInfo from "./DescriptionInfo";

import "$lib/style/profile/header/index.scss";

export default function ProfileHeader(props: IHeaderProfileProps) {
    return (
        <div className="profile-header-container">
            <ProfileImage {...props}/>
            <AccountInfo {...props}/>
            <div className="profile-info-container">
                <FollowingInfo {...props}/>
                <DescriptionInfo {...props}/>
            </div>
        </div>
    )
}