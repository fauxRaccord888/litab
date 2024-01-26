/* types */
import type { DBProfiles, IHeaderProfileProps } from "$feature/Profile/types"
/* components */
import Button from "$lib/components/common/Button";
import MoreIcon from "$lib/components/icons/More";
/* constants */
import PROFILE from '$feature/Profile/common/constants';
/* utils */
import { calcFontColorByBG, getFontColorArray } from "$lib/utils/luminance";
/* styles */
import "./style/account.scss"

interface AccountInfoProps extends DBProfiles {
    id: string
    mutable_id?: string | null
    preference?: (number | null)[] | null
}

export default function AccountInfo(props: IHeaderProfileProps<AccountInfoProps>) {
    const { profile, settings, action } = props
    const buttonBackground = getFontColorArray(profile.preference, PROFILE.DEFAULT_VALUES.buttonColor) 
    const fontColor = calcFontColorByBG(buttonBackground)
    const buttonStyle = {
        '--bg-color': String([...buttonBackground]), 
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
