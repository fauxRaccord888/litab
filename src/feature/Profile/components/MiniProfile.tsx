import type { FormatProps } from '$lib/types/components';
import type { DBMiniProfile } from "$feature/Profile/types";

import { useHandleFollow, useProfileNavigate } from '../hooks';
import UserInfoCard from './UserInfoCard';

import "./style/miniProfile.scss"

export default function MiniProfile(props: FormatProps<DBMiniProfile> & { displayFollow?: boolean }) {
    const { item, displayFollow } = props
    const navigate = useProfileNavigate(item.mutable_id)
    const handleFollow = useHandleFollow(item.id)

    return (
        <div className="mini-profile-component">
            <UserInfoCard 
                item={item}
                renderConfig={{
                    coverImage: true,
                    title: true,
                    mainInfo: false,
                    subInfo: false,
                }}
                options={{
                    displayFollow: Boolean(displayFollow),
                    full: false,
                    miniView: true,
                    displayInteraction: false,
                }}
                eventHandler={{
                    ...navigate,
                    handleFollow
                }}
            />
        </div>
    )
}