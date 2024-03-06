import type { MouseEvent } from "react";
import type { DBMiniProfile } from "$feature/Profile/types";
import { useTranslatedRelativeTime } from "$lib/hooks";
import MiniProfile from "$feature/Profile/components/MiniProfile";
import MoreIcon from "$lib/components/icons/More";

import './style/selectMetaInfo.scss'

type SelectMetaInfoProps = {
    created_at: string
    users: DBMiniProfile
    handleClickInteraction?: () => void
}

export default function SelectMetaInfo(props: SelectMetaInfoProps) {
    const { created_at, users, handleClickInteraction } = props
    const relativeTime = useTranslatedRelativeTime(new Date(created_at))

    const onClickIcon = (e: MouseEvent) => {
        e.stopPropagation()
        if (handleClickInteraction) handleClickInteraction()
    }

    return (
        <div className="select-meta-info-component">
            <div className="select-meta-info-component__main-container">
                <div className="select-meta-info-component__profile-container">
                    <MiniProfile item={users}/>
                </div>
                <span 
                    className="select-meta-info-component__date"
                    title={String(new Date(created_at))}
                >
                    {relativeTime}
                </span>
            </div>
            <div className="select-meta-info-component__interaction-container" onClick={onClickIcon}>
                <MoreIcon />
            </div>
        </div>
    )
}
