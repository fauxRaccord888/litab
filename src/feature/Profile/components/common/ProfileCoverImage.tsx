/* types */
import type { MouseEvent } from "react"
import type { DBProfiles, ProfileEventHandler } from "../../types"
/* components */
import UserIcon from "$lib/components/icons/UserIcon"
import BucketImage from "$lib/components/common/BucketImage"

type ProfileCoverImageProps = {
    item: DBProfiles,
    id: DBProfiles["id"]
    updatedAt: DBProfiles["updatedAt"],
    eventHandler: ProfileEventHandler
    className?: string,
}

export default function ProfileCoverImage(props: ProfileCoverImageProps) {
    const { item, id, updatedAt, eventHandler, className } = props
    
    const onClickProfile = (e: MouseEvent) => {
        e.stopPropagation()
        if (eventHandler.selectProfile) eventHandler.selectProfile(item)
    }

    return (
        <BucketImage
            id={id}
            onClick={onClickProfile}
            bucket="users"
            timeStamp={updatedAt}
            className={className}
            fallback={<UserIcon className="profile-cover-image-component__fallback-image"/>}
        />
    )
}