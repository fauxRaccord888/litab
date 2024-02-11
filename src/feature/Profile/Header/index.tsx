import type { DBProfiles } from "$feature/Profile/types"

import ProfileImage from "../components/ProfileImage";
import AccountInfo from "../components/AccountInfo";
import AccountInteraction from "../components/AccountInteraction";
import FollowingInfo from "../components/FollowingInfo";
import DescriptionInfo from "../components/DescriptionInfo";

import './style/index.scss'

export default function ProfileSelectView(props: DBProfiles) {
    const { item } = props
    return (
        <div className="profile-header-container">
            <div className="profile-image-outer-container">
                <ProfileImage item={item}/>
            </div>
            <div className="account-info-outer-container">
                <AccountInfo item={item}/>
                <AccountInteraction item={item}/>
            </div>
            <div className="profile-info-container">
                <FollowingInfo item={item}/>
                <DescriptionInfo item={item}/>
            </div>
        </div>
    )
}