import type { RouterContext } from '$lib/types/components';
import type { DBMiniProfile } from "$feature/Profile/types";

import { useHandleFollow } from '../hooks';
import { useProfileNavigate } from '$feature/navigate/hooks';
import UserInfoCard from './UserInfoCard';

import "./style/miniProfile.scss"

type MiniProfileProps = {
    item: DBMiniProfile,
    context: RouterContext,
    displayFollow?: boolean 
}

export default function MiniProfile(props: MiniProfileProps) {
    const { item, context, displayFollow } = props
    const navigate = useProfileNavigate()
    const handleFollow = useHandleFollow(item.id, context.currentUser)

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
                    roundedCover: true,
                    miniView: true,
                    displayInteraction: false,
                }}
                eventHandler={{
                    handleFollow,
                    showProfile: navigate.profileSelect
                }}
                context={context}
            />
        </div>
    )
}