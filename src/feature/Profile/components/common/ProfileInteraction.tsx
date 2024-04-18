/* types */
import type { MouseEvent } from 'react';
import type { DBProfiles, ProfileEventHandler, ProfileInfoCardOptions } from "../../types"
/* hooks */
import { useTranslation } from "react-i18next";
/* components */
import Button from "$lib/components/common/Button";
import MoreIcon from "$lib/components/icons/MoreIcon";
/* styles */
import "./style/profileInteraction.scss"

type ProfileInteractionsProps = {
    id: DBProfiles["id"]
    mutableId: DBProfiles["mutableId"]
    isMe?: boolean | undefined,
    followed?: boolean | undefined,
    eventHandler: ProfileEventHandler
    options: ProfileInfoCardOptions
}

export default function ProfileInteraction(props: ProfileInteractionsProps ) {
    const { id, mutableId, isMe, followed, eventHandler, options } = props
    const { t } = useTranslation()

    const onClickFollow = (e:MouseEvent) => {
        e.stopPropagation()
        if (eventHandler.follow) eventHandler.follow(id)
    }

    const onClickInteraction = (e: MouseEvent) => {
        e.stopPropagation()
        if (eventHandler.profileSelectMenuModal) eventHandler.profileSelectMenuModal(mutableId)
    }

    return (
        <>
            {(options.displayFollow || options.displayInteraction) && 
                <div className="profile-interaction-component">
                    {options.displayFollow && !isMe &&
                        <div className="profile-interaction-component__follow">
                            <Button 
                                danger={followed}
                                primary={!followed}
                                onClick={onClickFollow}
                            >
                                {followed ? t('profile.header.followButtonLabel.unfollow') : t('profile.header.followButtonLabel.follow')}
                            </Button>
                        </div>
                    }
                    {options.displayInteraction &&
                        <div 
                            onClick={onClickInteraction}
                            className={[
                                "profile-interaction-component__more-interaction",
                                eventHandler.profileSelectMenuModal ? "profile-interaction-component__more-interaction--pointer" : ""
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
