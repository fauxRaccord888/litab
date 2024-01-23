/* types */
import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header"
/* components */
import Button from "$lib/components/common/Button";
import MoreIcon from "$lib/components/icons/More";
/* constants */
import PROFILE from '$lib/constants/components/Profile';
/* utils */
import { calcFontColorByBG } from "$lib/utils/luminance";
/* styles */
import "$lib/style/profile/header/account.scss"

export default function AccountInfo(props: IHeaderProfileProps) {
    const { profile, settings, action } = props
    const preference = profile.preference ?? PROFILE.DEFAULT_VALUES.buttonColor
    const fontColor = calcFontColorByBG(preference)
    const buttonStyle = {
        '--bg-color': String([...preference]), 
        '--font-color': fontColor
    }
    const voidFunction = () => {}

    return (
        <div className="account-info-container">
            <span className="header-mutable-id">{profile.mutable_id}</span>
            {action.handleFollow && 
                <Button 
                    style={buttonStyle} 
                    onClick={action.handleFollow}
                >
                    {PROFILE.BUTTON_LABEL.follow[settings.lang]}
                </Button>
            }
            {action.handleShowMore && 
                <div className="more-action-icon-container">
                    <Button icon onClick={action.handleShowMore ?? voidFunction}>
                        <MoreIcon />
                    </Button>
                </div>
            }
        </div>
    )
}
