import type { RouterContext } from '$lib/types/components';
import type { DBAuthUser } from '$feature/auth/type';
import type { DBProfiles } from "$feature/Profile/types";
import type { TabItem } from '$lib/components/common/Tab';
import type { useProfileNavigate } from '$feature/navigate/hooks';

import UserInfoCard from './UserInfoCard';
import Tab from '$lib/components/common/Tab';

import "./style/profileSelectView.scss"

export default function ProfileSelectView(props: {
    item: DBProfiles
    context: RouterContext,

    navigate: ReturnType<typeof useProfileNavigate>,
    tabItems?: TabItem[]
    handleFollow: (id: string, user: DBAuthUser | null | undefined) => void
}) {
    const { item, context, navigate, tabItems, handleFollow } = props

    const onFollow = () => {
        handleFollow(item.id, context.currentUser)
    }
    
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
                    roundedCover: true,
                    miniView: false,
                    displayFollow: true,
                    displayInteraction: true,
                }}
                eventHandler={{
                    handleFollow: onFollow,
                    showFollowers: navigate.followersDetail,
                    showFollowings: navigate.followingsDetail,
                    showInteraction: navigate.profileSelectDetail,
                    showMutualFollowers: navigate.mutualFollowersDetail,
                }}
                context={context}
            />
            {tabItems && 
                <Tab items={tabItems} />
            }
        </div>
    )
}