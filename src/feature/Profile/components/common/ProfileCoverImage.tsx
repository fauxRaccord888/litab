/* types */
import type { MouseEvent } from "react"
import type { DBProfiles } from "$feature/Profile/types"
/* components */
import UserIcon from "$lib/components/icons/UserIcon"
import BucketImage from "$lib/components/common/BucketImage"
/* style */
import "./style/profileCoverImage.scss"

type ProfileCoverImageProps = {
    id: DBProfiles["id"]
    mutable_id: DBProfiles["mutable_id"]
    miniView?: boolean
    handleShowProfile?: (mutableId: string) => void
}

export default function ProfileCoverImage(props: ProfileCoverImageProps) {
    const { id, mutable_id, miniView, handleShowProfile } = props
    
    const onClickProfile = (e: MouseEvent) => {
        e.stopPropagation()
        if (handleShowProfile) handleShowProfile(mutable_id)
    }

    return (
        <div
            onClick={onClickProfile}
            className={[
                "profile-cover-image-component",
                (miniView ? 'profile-cover-image-component--mini-view' : ''),
                (handleShowProfile ? 'profile-cover-image-component--pointer' : ''),
            ].join(' ')}
        >
            <BucketImage
                id={id}
                bucket="profiles"
                fallback={<UserIcon className="profile-cover-image-component__fallback-image"/>}
            />
        </div>
    )
}