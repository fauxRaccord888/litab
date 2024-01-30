/* types */
import type { DBProfiles, IHeaderProfileProps } from "$feature/Profile/types"
/* styles */
import "./style/accountInfo.scss"

interface AccountInfoProps extends DBProfiles {
    mutable_id?: string | null
    nickname?: string | null
}

export default function AcocuntInfo(props: IHeaderProfileProps<AccountInfoProps> & { mini?: boolean }) {
    const { id, profile, action, mini } = props

    const showProfileFlag = mini && action?.handleShowProfile

    const handleShowProfile = () => {
        if (!showProfileFlag || !action?.handleShowProfile) return
        action?.handleShowProfile(id)
    }

    return (
        <div className={`account-info-container ${mini ? 'mini-profile' : ''}`}>
            {profile.mutable_id && 
                <span className="header-mutable-id">
                    <button 
                        className={`${showProfileFlag ? 'pointer' : ''}`}
                        onClick={handleShowProfile}
                    >
                        {profile.mutable_id}
                    </button>
                </span>
            }
            {mini && profile.nickname && 
                <span className="header-nickname">
                    <button 
                        className={`${showProfileFlag ? 'pointer' : ''}`}
                        onClick={handleShowProfile}
                    >
                        {profile.nickname}
                    </button>
                </span>
            }
        </div>
    )
}