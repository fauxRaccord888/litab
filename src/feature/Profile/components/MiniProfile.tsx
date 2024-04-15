import type { DBMiniProfile, ProfileEventHandler, ProfileInfoCardOptions } from "../types";

import { useHandleFollow } from '../hooks';
import ProfileInfoCard from './UserInfoCard';

import "./style/miniProfile.scss"

type MiniProfileProps = {
    item: DBMiniProfile,
    options: ProfileInfoCardOptions,
    eventHandler: ProfileEventHandler
}

export default function MiniProfile(props: MiniProfileProps) {
    const { item, options, eventHandler } = props
    const handleFollow = useHandleFollow()

    const onFollow = () => {
        handleFollow(item.id)
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
                    ...eventHandler
                }}
            />
        </div>
    )
}