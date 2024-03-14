/* types */
import type { MouseEvent } from 'react';
/* hooks */
import { useTranslation } from "react-i18next";
/* components */
import Button from "$lib/components/common/Button";
import MoreIcon from "$lib/components/icons/MoreIcon";
/* styles */
import "./style/profileInteraction.scss"

type ProfileInteractionsProps = {
    isMe?: boolean | undefined,
    followed?: boolean | undefined,
    displayFollow?: boolean
    displayMoreInteraction?: boolean
    handleFollow?: () => void
    handleShowInteraction?: () => void
}

export default function ProfileInteraction(props: ProfileInteractionsProps ) {
    const { isMe, followed, displayFollow, displayMoreInteraction, handleFollow, handleShowInteraction } = props
    const { t } = useTranslation()

    const onClickFollow = (e:MouseEvent) => {
        e.stopPropagation()
        if (handleFollow) handleFollow()
    }

    const onClickInteraction = (e: MouseEvent) => {
        e.stopPropagation()
        if (handleShowInteraction) handleShowInteraction()
    }

    return (
        <>
            {(displayFollow || displayMoreInteraction) && 
                <div className="profile-interaction-component">
                    {displayFollow && !isMe &&
                        <div className="profile-interaction-component__follow">
                            <Button 
                                danger={followed}
                                primary={!followed}
                                onClick={onClickFollow}
                            >
                                {followed ? t('header.followButtonLabel.unfollow') : t('header.followButtonLabel.follow')}
                            </Button>
                        </div>
                    }
                    {displayMoreInteraction &&
                        <div 
                            onClick={onClickInteraction}
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
