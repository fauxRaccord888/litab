/* types */
import type { MouseEvent } from 'react';
import type { DBProfiles } from '../../types';
/* hooks */
import { useCheckFollowed } from '../../hooks';
import { useTranslation } from "react-i18next";
/* components */
import Button from "$lib/components/common/Button";
import MoreIcon from "$lib/components/icons/More";
/* styles */
import "./style/profileInteraction.scss"

type ProfileInteractionsProps = {
    id: DBProfiles["id"],
    displayFollow?: boolean
    displayMoreInteraction?: boolean
    handleFollow?: (e: MouseEvent) => void
    handleShowInteraction?: (e: MouseEvent) => void
}

export default function ProfileInteraction(props: ProfileInteractionsProps ) {
    const { id, displayFollow, displayMoreInteraction, handleFollow, handleShowInteraction } = props
    const { t } = useTranslation()
    const followed = useCheckFollowed(id)

    const handleClickFollow = (e:MouseEvent) => {
        if (handleFollow) handleFollow(e)
    }

    const handleClickMoreInteraction = (e: MouseEvent) => {
        if (handleShowInteraction) handleShowInteraction(e)
    }

    return (
        <>
            {(displayFollow || displayMoreInteraction) && 
                <div className="profile-interaction-component">
                    {displayFollow &&
                        <div className="profile-interaction-component__follow">
                            <Button 
                                danger={followed}
                                primary={!followed}
                                onClick={handleClickFollow}
                            >
                                {followed ? t('header.followButtonLabel.unfollow') : t('header.followButtonLabel.follow')}
                            </Button>
                        </div>
                    }
                    {displayMoreInteraction &&
                        <div 
                            onClick={(e) => handleClickMoreInteraction(e)}
                            className={[
                                "profile-interaction-component__more-interaction",
                                handleShowInteraction ? "profile-interaction-component__more-interaction--pointer" : ""
                            ].join(" ")}
                        >
                            <MoreIcon />
                        </div>
                    }
                </div>
            }
        </>
    )
}
