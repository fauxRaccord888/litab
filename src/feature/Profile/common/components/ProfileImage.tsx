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
    const { profile, action } = props
    const [error, setError] = useState(false)
    const handleImageError = () => setError(true)
    const imgSrc = imageSourceHelper({bucket: 'profiles', userId: profile.id})

    return (
        <div className="profile-image-container">
            {!error
                ? (<img
                        onClick={action?.handleClickProfile}
                        className={[
                            'profile-image',
                            (action?.handleClickProfile ? 'pointer' : '')
                        ].join(' ')}
                        src={imgSrc}
                        onError={handleImageError}
                    />)
                : (<UserIcon className="fallback-image"/>)
            }
        </div>
    )
}