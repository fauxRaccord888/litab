import type { IHeaderProfileProps } from "$feature/Profile/types";
import type { PropsWithStatus } from "$lib/types/components";

import AccountInfo from "$feature/Profile/common/components/AccountInfo";
import ProfileImage from "$feature/Profile/common/components/ProfileImage";
import "./style/index.scss"

export default function MiniProfile(props: PropsWithStatus<IHeaderProfileProps>) {
    if (props.status === 'error') return null
    if (props.status === 'pending') return null
    return (
        <div className="mini-profile-container">
            <div className="profile-image-outer-container">
                <ProfileImage {...props}/>
            </div>
            <AccountInfo {...props}/>
        </div>
    )
}