import type { RouterContext } from '$lib/types/components';
import type { DBProfiles } from "$feature/Profile/types";

import { useHandleFollow } from '../hooks';
import { useProfileNavigate } from '$feature/navigate/hooks';
import UserInfoCard from './UserInfoCard';

import "./style/profileSelectView.scss"

export default function ProfileSelectView(props: {
    item: DBProfiles
    context: RouterContext
}) {
    const { item, context } = props
    const navigate = useProfileNavigate()
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
                    showFollowers: navigate.followersDetail,
                    showFollowings: navigate.followingsDetail,
                    showInteraction: navigate.profileSelectDetail,
                    showMutualFollowers: navigate.mutualFollowersDetail,
                }}
                context={context}
            />
        </div>
    )
}