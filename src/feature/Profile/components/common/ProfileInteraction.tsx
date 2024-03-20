/* types */
import type { MouseEvent } from 'react';
import type { DBProfiles, ProfileEventHandler, ProfileInfoCardOptions } from "../../types"
import type { ProcessedContext } from '$lib/types/components';
/* hooks */
import { useTranslation } from "react-i18next";
/* components */
import Button from "$lib/components/common/Button";
import MoreIcon from "$lib/components/icons/MoreIcon";
/* styles */
import "./style/profileInteraction.scss"

type ProfileInteractionsProps = {
    id: DBProfiles["id"]
    mutable_id: DBProfiles["mutable_id"]
    isMe?: boolean | undefined,
    followed?: boolean | undefined,
    context: ProcessedContext
    eventHandler: ProfileEventHandler
    options: ProfileInfoCardOptions
}

export default function ProfileInteraction(props: ProfileInteractionsProps ) {
    const { id, mutable_id, isMe, followed, context, eventHandler, options } = props
    const { t } = useTranslation()

    const onClickFollow = (e:MouseEvent) => {
        e.stopPropagation()
        if (eventHandler.follow) eventHandler.follow(id, context.currentUser)
    }

    const onClickInteraction = (e: MouseEvent) => {
        e.stopPropagation()
        if (eventHandler.profileSelectMenuModal) eventHandler.profileSelectMenuModal(mutable_id)
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
