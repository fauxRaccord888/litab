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
    miniView?: boolean
    handleShowProfile?: (e: MouseEvent) => void
}

export default function ProfileCoverImage(props: ProfileCoverImageProps) {
    const { id, miniView, handleShowProfile } = props
    
    const handleClickProfile = (e: MouseEvent) => {
        if (handleShowProfile) handleShowProfile(e)
    }

    return (
        <div
            onClick={handleClickProfile}
            className={[
                "profile-cover-image-component",
                (miniView ? 'profile-cover-image-component__mini-view' : ''),
                (handleShowProfile ? 'profile-cover-image-component__pointer' : ''),
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