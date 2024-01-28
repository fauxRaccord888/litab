/* types */
import type { DBProfiles, IHeaderProfileProps } from "$feature/Profile/types"
/* styles */
import "./style/accountInfo.scss"

interface AccountInfoProps extends DBProfiles {
    id: string
    mutable_id?: string | null
    preference?: (number | null)[] | null
}

export default function AccountInfo(props: IHeaderProfileProps<AccountInfoProps>) {
    const { id, profile, action } = props

    const handleShowProfile = () => {
        if (!action?.handleShowProfile) return
        action?.handleShowProfile(id)
    }

    return (
        <div className="account-info-container">
            <span className="header-mutable-id">
                <button 
                    className={`${action?.handleShowProfile ? 'pointer' : ''}`}
                    onClick={handleShowProfile}
                >
                    {profile?.mutable_id || profile.id?.slice(0, 6)}
                </button>
            </span>
        </div>
    )
}
