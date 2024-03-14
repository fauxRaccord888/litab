import type { RouterContext } from '$lib/types/components';
import type { DBProfiles } from "$feature/Profile/types";

import { useHandleFollow, useProfileNavigate } from '../hooks';
import UserInfoCard from './UserInfoCard';

import "./style/profileSelectView.scss"

export default function ProfileSelectView(props: {
    item: DBProfiles
    context: RouterContext
}) {
    const { item, context } = props
    const navigate = useProfileNavigate(item.mutable_id)
    const handleFollow = useHandleFollow(item.id, context.currentUser)

    return (
        <div className="profile-select-view-component">
            <UserInfoCard 
                item={item} 
                renderConfig={{
                    coverImage: true,
                    title: true,
                    mainInfo: true,
                    subInfo: true,
                }}
                options={{
                    full: true,
                    miniView: false,
                    displayFollow: true,
                    displayInteraction: true,
                }}
                eventHandler={{
                    handleFollow,
                    showFollowers: navigate.showFollowers,
                    showFollowings: navigate.showFollowings,
                    showInteraction: navigate.showInteraction,
                    showMutualFollowers: navigate.showMutualFollowers,
                }}
                context={context}
            />
        </div>
    )
}