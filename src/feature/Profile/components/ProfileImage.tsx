/* types */
import type { FormatProps } from '$lib/types/components';
import type { DBProfiles } from "$feature/Profile/types"
/* hooks */
import { useProfileNavigation } from "../hooks"
/* components */
import UserIcon from "$lib/components/icons/UserIcon"
import BucketImage from "$lib/components/common/BucketImage"
/* style */
import "./style/profileImage.scss"

export default function ProfileImage(props: FormatProps<DBProfiles> & { mini?: boolean }) {
    const { item, mini  } = props
    const { id, mutable_id } = item
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