/* types */
import type { FormatProps } from '$lib/types/components';
import type { DBProfiles } from "$feature/Profile/types"
/* hooks */
import { useTranslation } from "react-i18next";
import { useCheckFollowed, useFollowMutation, useProfileNavigation } from '../hooks';
/* components */
import Button from "$lib/components/common/Button";
import MoreIcon from "$lib/components/icons/More";
/* styles */
import "./style/accountIneraction.scss"


export default function AccountInteraction(props: FormatProps<DBProfiles> & { mini?: boolean } ) {
    const { item, mini } = props
    const { id, mutable_id } = item
    const { t } = useTranslation()
    const followed = useCheckFollowed(id)
    const {
        follow: [followMutation],
        unfollow: [unfollowMutation]
    } = useFollowMutation()
    const { interaction: handleMoreInteraction } = useProfileNavigation()

    const handleFollow = () => {
        if (followed) unfollowMutation(id)
        else followMutation(id)
    }

    return (
        <div className="account-interaction-container">
            <Button 
                className={followed ? 'danger' : 'primary'}
                onClick={handleFollow}
            >
                {followed ? t('header.followButtonLabel.unfollow') : t('header.followButtonLabel.follow')}
            </Button>
            {!mini && 
                <div className="more-action-icon-container">
                    <Button icon onClick={() => handleMoreInteraction(mutable_id)}>
                        <MoreIcon />
                    </Button>
                </div>
            }
        </div>
    )
}
