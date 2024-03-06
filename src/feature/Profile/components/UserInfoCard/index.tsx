import type { MouseEvent } from "react";
import type { DBProfiles } from "$feature/Profile/types"
import type { FormatProps } from '$lib/types/components';
import type { ISlotRenderConfig } from "$feature/template/type";

import { useMutualFollowers } from "$feature/Profile/hooks";

import ProfileCoverImage from "../common/ProfileCoverImage";
import ProfileUserInfo from "../common/ProfileUserInfo";
import ProfileInteraction from "../common/ProfileInteraction";
import ProfileFollowingInfo from "../common/ProfileFollowingInfo";
import ProfileDescriptionInfo from "../common/ProfileDescriptionInfo";
import InfoCardTemplate from "$feature/template/components/InfoCardTemplate";

import './style/index.scss'

type UserInfoCardKeys = "coverImage" | "title" | "mainInfo" | "subInfo"
type UserInfoCardOptionKey = "full" | "miniView" | "displayFollow" | "displayInteraction"
type UserInfoCardEventHandler = {
    showProfile?: (e: MouseEvent) => void
    showMutualFollowers?: (e: MouseEvent) => void
    showFollowings?: (e: MouseEvent) => void
    showFollowers?: (e: MouseEvent) => void
    showInteraction?: (e: MouseEvent) => void
    
    handleFollow?: (e: MouseEvent) => void
}
type UserInfoCardProps = FormatProps<DBProfiles> & {
    renderConfig: ISlotRenderConfig<UserInfoCardKeys>
    options: ISlotRenderConfig<UserInfoCardOptionKey>
    eventHandler: UserInfoCardEventHandler
}

export default function UserInfoCard(props: UserInfoCardProps) {
    const { item, renderConfig, options, eventHandler } = props
    const { id, mutable_id, nickname, description, followersCollection, followingsCollection } = item
    const mutualFollowers= useMutualFollowers(id, followersCollection)

    const coverImage = (
        options.full &&
        <div className={[
            "user-info-card-component__cover-image-container",
            "user-info-card-component__cover-image-container--main",
            "disable-partition-on-mobile",
        ].join(" ")}>
            <ProfileCoverImage 
                id={id} 
                miniView={false}
                handleShowProfile={eventHandler.showProfile}
            />
        </div> 
    ) || null

    const title = (
        <div className="user-info-card-component__title-container">
            
            <div className={[
                "user-info-card-component__cover-image-container",
                options.full ? "user-info-card-component__cover-image-container--mobile" : "",
                options.miniView ? "user-info-card-component__cover-image-container--mini-view" : ""
            ].join(" ")}>
                <ProfileCoverImage 
                    id={id} 
                    miniView={false}
                    handleShowProfile={eventHandler.showProfile}
                />
            </div>

            <div className={[
                "user-info-card-component__profile-info-interaction-container",
                options.full ? "user-info-card-component__profile-info-interaction-container--line-break" : "" ,
                options.miniView ? "user-info-card-component__profile-info-interaction-container--mini-view" : "" ,
            ].join(" ")}>
                <ProfileUserInfo
                    mutable_id={mutable_id}
                    nickname={nickname}
                    miniView={options.miniView}
                    handleShowProfile={eventHandler.showProfile}
                />
                <ProfileInteraction 
                    id={id}
                    displayFollow={options.displayFollow}
                    displayMoreInteraction={options.displayInteraction}
                    handleFollow={eventHandler.handleFollow}
                    handleShowInteraction={eventHandler.showInteraction}
                />
            </div>
        </div>
    )

    const mainInfo = (
        <ProfileFollowingInfo
            followersCollection={followersCollection}
            followingsCollection={followingsCollection}
            handleShowFollowings={eventHandler.showFollowings}
            handleShowFollowers={eventHandler.showFollowers}
        />
    )

    const subInfo = (
        <ProfileDescriptionInfo
            nickname={nickname}
            description={description}
            mutualFollowers={mutualFollowers}
            handleShowMutualFollowers={eventHandler.showMutualFollowers}
        />
    )

    return (
        <div className="user-info-card-component">
            <InfoCardTemplate 
                id={item.id}
                renderConfig={renderConfig}
                components={{
                    coverImage,
                    title,
                    mainInfo,
                    subInfo
                }}
            />
        </div>
    )
}