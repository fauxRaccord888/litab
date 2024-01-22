/* hooks */
import { useState } from "react"
/* types */
import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header"
/* components */
import UserIcon from "$lib/components/icons/UserIcon"
/* style */
import "$lib/style/profile/header/profileImage.scss"


export default function ProfileImage(props: IHeaderProfileProps) {
    const { profile } = props
    const [error, setError] = useState(false)
    const handleImageError = () => {
        setError(true)
    }
    return (
        <div className="profile-image-container">
            {!error
                ? (
                    <img
                        className="profile-image" 
                        src={profile.img_src}
                        onError={handleImageError}
                    />
                )
                : (
                    <UserIcon 
                        className="fallback-image"
                    />
                )
            }
        </div>
    )
}