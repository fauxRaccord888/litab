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
import "./style/accountIneraction.scss"

interface AccountInteractionButtonsProps extends DBProfiles {
    id: string
    preference?: (number | null)[] | null
}

export default function AccountInteraction(props: IHeaderProfileProps<AccountInteractionButtonsProps>) {

    const { profile, action, settings } = props
    const buttonBackground = getFontColorArray(profile.preference, PROFILE.DEFAULT_VALUES.buttonColor) 
    const fontColor = calcFontColorByBG(buttonBackground)
    const buttonStyle = {
        '--bg-color': String([...buttonBackground]), 
        '--font-color': fontColor
    }

    return (
        <div className="account-interaction-container">
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
