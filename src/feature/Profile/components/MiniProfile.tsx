import type { UnprocessedContext } from '$lib/types/components';
import type { DBMiniProfile, ProfileInfoCardOptions } from "../types";

import { useHandleFollow } from '../hooks';
import { useProfileNavigate } from '$feature/navigate/hooks';
import ProfileInfoCard from './UserInfoCard';

import "./style/miniProfile.scss"

type MiniProfileProps = {
    item: DBMiniProfile,
    context: UnprocessedContext,
    options: ProfileInfoCardOptions
}

export default function MiniProfile(props: MiniProfileProps) {
    const { item, context, options } = props
    const navigate = useProfileNavigate()
    const handleFollow = useHandleFollow()

    const onFollow = async () => {
        await handleFollow(item.id)
    }

    return (
        <div className="mini-profile-component">
            <ProfileInfoCard 
                item={item}
                renderConfig={{
                    coverImage: true,
                    title: true,
                    mainInfo: false,
                    subInfo: false,
                }}
                options={{
                    ...options,
                    roundedCover: true,
                    miniView: true,
                    displayInteraction: false,
                }}
                eventHandler={{
                    follow: onFollow,
                    selectProfile: navigate.profileSelect
                }}
                context={context}
            />
        </div>
    )
}