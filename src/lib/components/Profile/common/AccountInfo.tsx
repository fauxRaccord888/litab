/* types */
import type { DBProfiles, IHeaderProfileProps } from "$lib/types/components/Profile/Header"
/* components */
import Button from "$lib/components/common/Button";
import MoreIcon from "$lib/components/icons/More";
/* constants */
import PROFILE from '$lib/constants/components/Profile';
/* utils */
import { calcFontColorByBG } from "$lib/utils/luminance";
/* styles */
import "$lib/style/profile/header/account.scss"

interface AccountInfoProps extends DBProfiles {
    id: string
    mutable_id?: string | null
    preference?: (string | null)[] | null
}

export default function AccountInfo(props: IHeaderProfileProps<AccountInfoProps>) {
    const { profile, settings, action } = props
    const preference = profile.preference ?? PROFILE.DEFAULT_VALUES.buttonColor
    const fontColor = calcFontColorByBG(profile.preference)
    const buttonStyle = {
        '--bg-color': String([...preference]), 
        '--font-color': fontColor
    }

    return (
        <div className="account-info-container">
            <span className="header-mutable-id">
                <button 
                    className={`${action?.handleClickProfile ? 'pointer' : ''}`}
                    onClick={action?.handleClickProfile}
                >
                    {profile?.mutable_id || profile.id?.slice(0, 6)}
                </button>
            </span>
            {action && action.handleFollow && 
                <Button 
                    style={buttonStyle} 
                    onClick={action.handleFollow}
                >
                    {PROFILE.BUTTON_LABEL.follow[settings.lang]}
                </Button>
            }
            {action && action.handleShowMore && 
                <div className="more-action-icon-container">
                    <Button icon onClick={action.handleShowMore}>
                        <MoreIcon />
                    </Button>
                </div>
            }
        </div>
    )
}
