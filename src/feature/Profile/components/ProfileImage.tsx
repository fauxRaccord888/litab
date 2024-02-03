/* hooks */
import { useProfileNavigation } from "../hooks"
/* types */
import type { DBProfiles } from "$feature/Profile/types"
/* components */
import UserIcon from "$lib/components/icons/UserIcon"
import BucketImage from "$lib/components/common/BucketImage"
/* style */
import "./style/profileImage.scss"

interface ProfileImageProps extends DBProfiles{
    id: string 
    mutable_id: string
}

export default function ProfileImage(props: ProfileImageProps & { mini?: boolean }) {
    const { id, mutable_id, mini  } = props
    const { profile: showProfile } = useProfileNavigation()

    const handleShowProfile = () => {
        if (!mini) return
        showProfile(mutable_id)
    }

    return (
        <div className="profile-image-container">
            <div
                onClick={handleShowProfile}
                className={[
                    'profile-image',
                    (mini ? 'pointer' : '')
                ].join(' ')}
            >
                <BucketImage
                    id={id}
                    bucket="profiles"
                    fallback={<UserIcon className="fallback-image"/>}
                />
            </div>
        </div>
    )
}