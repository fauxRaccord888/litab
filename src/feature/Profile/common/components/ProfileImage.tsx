/* hooks */
import { useState } from "react"
/* types */
import type { DBProfiles, IHeaderProfileProps } from "$feature/Profile/types"
/* components */
import UserIcon from "$lib/components/icons/UserIcon"
/* utils */
import { imageSourceHelper } from "$lib/utils/images/imageSourceHelper"
/* style */
import "./style/profileImage.scss"

interface ProfileImageProps extends DBProfiles{
    id: string 
}

export default function ProfileImage(props: IHeaderProfileProps<ProfileImageProps>) {
    const { id, profile, action } = props
    const [error, setError] = useState(false)
    const handleImageError = () => setError(true)
    const imgSrc = imageSourceHelper({bucket: 'profiles', userId: profile.id})

    const handleShowProfile = () => {
        if (!action?.handleShowProfile) return
        action.handleShowProfile(id)
    }

    return (
        <div className="profile-image-container">
            {!error
                ? (<img
                        onClick={handleShowProfile}
                        className={[
                            'profile-image',
                            (action?.handleShowProfile ? 'pointer' : '')
                        ].join(' ')}
                        src={imgSrc}
                        onError={handleImageError}
                    />)
                : (<UserIcon className="fallback-image"/>)
            }
        </div>
    )
}