import type { FormatProps } from '$lib/types/components';
import type { DBProfiles } from "$feature/Profile/types";

import ProfileImage from "../components/ProfileImage";
import AccountInfo from "../components/AccountInfo";
import AccountInteraction from "../components/AccountInteraction";

import "./style/index.scss"

interface MiniProfileProps extends FormatProps<DBProfiles>{
    interaction?: boolean
    md?: boolean
}

export default function MiniProfile(props: MiniProfileProps) {
    const { item, interaction, md } = props
    return (
        <div 
            className={`mini-profile-container ${md ? 'md' : ''}`}
        >
            <div className="profile-container">
                <ProfileImage mini item={item}/>
                <AccountInfo mini item={item}/>
            </div>
            {interaction && 
                <div className="interaction-container">
                    <AccountInteraction mini item={item}/>
                </div>
            }
        </div>
    )
}