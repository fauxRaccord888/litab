/* types */
import type { DBProfiles } from "$feature/Profile/types"
/* hooks */
import { useProfileNavigation } from "../hooks"
/* styles */
import "./style/accountInfo.scss"

interface AccountInfoProps extends DBProfiles {
    mutable_id: string 
    nickname?: string | null
}

export default function AcocuntInfo(props: AccountInfoProps & { mini?: boolean }) {
    const { mutable_id, nickname, mini } = props
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