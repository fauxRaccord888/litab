/* hooks */
import { useState } from "react"
/* types */
import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header"
/* components */
import UserIcon from "$lib/components/icons/UserIcon"
/* utils */
import { imageSourceHelper } from "$lib/utils/images/imageSourceHelper"
/* style */
import "$lib/style/profile/header/profileImage.scss"


export default function ProfileImage(props: IHeaderProfileProps) {
    const { profile } = props
    const [error, setError] = useState(false)
    const handleImageError = () => setError(true)
    const imgSrc = imageSourceHelper({bucket: 'profiles', userId: profile.id})

    return (
        <div className="profile-image-container">
            {!error
                ? (<img
                        className="profile-image" 
                        src={imgSrc}
                        onError={handleImageError}
                    />)
                : (<UserIcon className="fallback-image"/>)
            }
        </div>
    )
}