/* types */
import type { MouseEvent } from "react"
import type { DBProfiles, ProfileEventHandler } from "../../types"
/* components */
import UserIcon from "$lib/components/icons/UserIcon"
import BucketImage from "$lib/components/common/BucketImage"

type ProfileCoverImageProps = {
    id: DBProfiles["id"]
    mutable_id: DBProfiles["mutable_id"]
    eventHandler: ProfileEventHandler
    className?: string,
}

export default function ProfileCoverImage(props: ProfileCoverImageProps) {
    const { id, mutable_id, eventHandler, className } = props
    
    const onClickProfile = (e: MouseEvent) => {
        e.stopPropagation()
        if (eventHandler.selectProfile) eventHandler.selectProfile(mutable_id)
    }

    return (
        <BucketImage
            id={id}
            onClick={onClickProfile}
            bucket="profiles"
            className={className}
            fallback={<UserIcon className="profile-cover-image-component__fallback-image"/>}
        />
    )
}