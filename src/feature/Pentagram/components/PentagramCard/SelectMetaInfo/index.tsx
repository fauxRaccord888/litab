import type { MouseEvent } from "react";
import type { DBMiniProfile, ProfileEventHandler } from "$feature/Profile/types";
import type { PentagramEventHandler } from "../../../types";
import { useTranslation } from "react-i18next";
import { useCurrentUser } from "$feature/auth/hooks";
import { useTranslatedRelativeTime } from "$lib/hooks";
import MiniProfile from "$feature/Profile/components/MiniProfile";
import MoreIcon from "$lib/components/icons/MoreIcon";
import Button from "$lib/components/common/Button";

import './style/selectMetaInfo.scss'

type SelectMetaInfoProps = {
    id: string,
    created_at: string
    users: DBMiniProfile
    eventHandler: PentagramEventHandler & ProfileEventHandler
}

export default function SelectMetaInfo(props: SelectMetaInfoProps) {    
    const { id, created_at, users, eventHandler } = props
    const { t } = useTranslation()
    const { currentUser } = useCurrentUser()
    const isAuthor = currentUser?.id === users.id
    const relativeTime = useTranslatedRelativeTime(new Date(created_at))

    const onClickIcon = (e: MouseEvent) => {
        e.stopPropagation()
        if (eventHandler.pentagramMenuModal) eventHandler.pentagramMenuModal(id)
    }

    const onClickUpdate = (e: MouseEvent) => {
        e.stopPropagation()
        if (!isAuthor) return
        if (eventHandler.navigateToUpdate) eventHandler.navigateToUpdate(id)
    }

    return (
        <div className="select-meta-info-component">
            <div className="select-meta-info-component__main-container">
                <div className="select-meta-info-component__profile-container">
                    <MiniProfile 
                        item={users} 
                        eventHandler={eventHandler}
                        options={{
                            displayFollow: false
                        }}
                    />
                </div>
                <span 
                    className="select-meta-info-component__date"
                    title={String(new Date(created_at))}
                >
                    {relativeTime}
                </span>
            </div>
            <div className="select-meta-info-component__interaction-container">
                {isAuthor && (
                    <div className="select-meta-info-component__update-button-container">
                        <Button className="select-meta-info-component__update-button" onClick={onClickUpdate}>{t('pentagram.button.update')}</Button>
                    </div>
                )}
                <div className="select-meta-info-component__more-icon-container" onClick={onClickIcon}>
                    <MoreIcon  />
                </div>
            </div>
        </div>
    )
}
