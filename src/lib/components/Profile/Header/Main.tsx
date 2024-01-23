import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header"

import ProfileImage from "./subComponents/ProfileImage";
import AccountInfo from "./subComponents/AccountInfo";
import FollowingInfo from "./subComponents/FollowingInfo";
import DescriptionInfo from "./subComponents/DescriptionInfo";

export default function Main(props: IHeaderProfileProps) {
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