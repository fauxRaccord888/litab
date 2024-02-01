/* hooks */
import { useState } from "react"
import { useProfileNavigation } from "../hooks"
/* types */
import type { DBProfiles } from "$feature/Profile/types"
/* components */
import UserIcon from "$lib/components/icons/UserIcon"
/* utils */
import { imageSourceHelper } from "$lib/utils/images/imageSourceHelper"
/* style */
import "./style/profileImage.scss"

interface ProfileImageProps extends DBProfiles{
    id: string 
    mutable_id: string
}

export default function ProfileImage(props: ProfileImageProps & { mini?: boolean }) {
    const { id, mutable_id, mini  } = props
    const [error, setError] = useState(false)
    const { profile: showProfile } = useProfileNavigation()

    const handleImageError = () => setError(true)
    const imgSrc = imageSourceHelper({bucket: 'profiles', userId: id})

    const handleShowProfile = () => {
        if (!mini) return
        showProfile(mutable_id)
    }

    return (
        <div className="profile-image-container">
            {!error
                ? (<img
                        onClick={handleShowProfile}
                        className={[
                            'profile-image',
                            (mini ? 'pointer' : '')
                        ].join(' ')}
                        src={imgSrc}
                        onError={handleImageError}
                    />)
                : (<UserIcon className="fallback-image"/>)
            }
        </div>
    )
}