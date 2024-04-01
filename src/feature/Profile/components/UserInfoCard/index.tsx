import type { DBProfiles, ProfileEventHandler, ProfileInfoCardOptions, ProfileInfoCardRenderOptions } from "../../types"
import { useCurrentUser } from "$feature/auth/hooks";
import { calcFollowings, calcMutualFollowers } from "$feature/Profile/util";

import ProfileCoverImage from "../common/ProfileCoverImage";
import ProfileUserInfo from "../common/ProfileUserInfo";
import ProfileInteraction from "../common/ProfileInteraction";
import ProfileFollowingInfo from "../common/ProfileFollowingInfo";
import ProfileDescriptionInfo from "../common/ProfileDescriptionInfo";
import InfoCardTemplate from "$feature/template/components/InfoCardTemplate";

import './style/userInfoCard.scss'

type ProfileInfoCardProps = {
    item: DBProfiles
    renderConfig: ProfileInfoCardRenderOptions
    options: ProfileInfoCardOptions
    eventHandler: ProfileEventHandler
}

export default function ProfileInfoCard(props: ProfileInfoCardProps) {
    const { item, renderConfig, options, eventHandler } = props
    const { id, mutable_id, nickname, description, updated_at, followersCollection, followingsCollection } = item
    const currentUser = useCurrentUser()

    const followings = calcFollowings(currentUser)
    const mutualFollowers = calcMutualFollowers(currentUser, item, followings)
    const isMe = currentUser?.id === id
    const followed = followings?.has(id)

    const handleClickProfile = () => {
        if (!eventHandler.selectProfile) return
        eventHandler?.selectProfile(mutable_id)
    }

    const coverImage = (
        <ProfileCoverImage 
            id={id} 
            mutable_id={mutable_id}
            updated_at={updated_at}
            eventHandler={eventHandler}
        />
    )

    const title = (
        <div className="user-info-card-component__title-container">
            <ProfileUserInfo
                mutable_id={mutable_id}
                nickname={nickname}
                eventHandler={eventHandler}
                options={options}
            />
            <ProfileInteraction 
                id={id}
                mutable_id={mutable_id}
                isMe={isMe}
                followed={followed}
                eventHandler={eventHandler}
                options={options}
            />
        </div>
    )

    const mainInfo = null
    
    const subInfo = (
        <>
            <ProfileFollowingInfo
                mutable_id={mutable_id}
                followersCollection={followersCollection}
                followingsCollection={followingsCollection}
                eventHandler={eventHandler}
            />
            <ProfileDescriptionInfo
                mutable_id={mutable_id}
                nickname={nickname}
                description={description}
                mutualFollowers={mutualFollowers}
                eventHandler={eventHandler}
            />
        </>
    )

    return (
        <div className="user-info-card-component">
            <InfoCardTemplate 
                id={item.id}
                onClick={handleClickProfile}
                renderConfig={renderConfig}
                components={{
                    coverImage,
                    title,
                    mainInfo,
                    subInfo
                }}
                options={options}
            />
        </div>
    )
}