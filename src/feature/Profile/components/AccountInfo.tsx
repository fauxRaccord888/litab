/* types */
import type { DBProfiles } from "$feature/Profile/types"
/* hooks */
import { useProfileNavigation } from "../hooks"
/* styles */
import "./style/accountInfo.scss"

export default function AcocuntInfo(props: DBProfiles & { mini?: boolean }) {
    const { item, mini } = props
    const { mutable_id, nickname } = item
    const { profile: showProfileHandler } = useProfileNavigation()

    const handleShowProfile = () => {
        if (!mini) return
        showProfileHandler(mutable_id)
    }

    return (
        <div className={`account-info-container ${mini ? 'mini-profile' : ''}`}>
            <span className="header-mutable-id">
                <button 
                    className={`${mini ? 'pointer' : ''}`}
                    onClick={handleShowProfile}
                >
                    {mutable_id}
                </button>
            </span>
            {mini && nickname && 
                <span className="header-nickname">
                    <button 
                        className={`${mini ? 'pointer' : ''}`}
                        onClick={handleShowProfile}
                    >
                        {nickname}
                    </button>
                </span>
            }
        </div>
    )
}